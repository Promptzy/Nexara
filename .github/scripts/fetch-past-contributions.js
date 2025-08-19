#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Points system
const POINTS = {
  "level 1": 4,
  "level 2": 7,
  "level 3": 10,
};

// Valid difficulty labels
const VALID_LABELS = ["level 1", "level 2", "level 3"];

async function fetchAllMergedPRs(octokit, owner, repo) {
  console.log("🔍 Fetching all merged pull requests...");

  const allPRs = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    try {
      const response = await octokit.rest.pulls.list({
        owner,
        repo,
        state: "closed",
        per_page: perPage,
        page: page,
        sort: "updated",
        direction: "desc",
      });

      if (response.data.length === 0) {
        break;
      }

      // Filter only merged PRs
      const mergedPRs = response.data.filter((pr) => pr.merged_at !== null);
      allPRs.push(...mergedPRs);

      console.log(
        `📄 Page ${page}: Found ${response.data.length} closed PRs, ${mergedPRs.length} were merged`,
      );

      if (response.data.length < perPage) {
        break;
      }

      page++;
    } catch (error) {
      console.error("❌ Error fetching PRs:", error.message);
      break;
    }
  }

  console.log(`✅ Total merged PRs found: ${allPRs.length}`);
  return allPRs;
}

async function processPR(octokit, owner, repo, pr, contributors) {
  const username = pr.user.login;
  const prNumber = pr.number;

  console.log(`\n📋 Processing PR #${prNumber} by @${username}`);

  // Get PR labels
  try {
    const labelsResponse = await octokit.rest.issues.listLabelsOnIssue({
      owner,
      repo,
      issue_number: prNumber,
    });

    const labels = labelsResponse.data.map((label) => label.name.toLowerCase());
    console.log(`🏷️  Labels: ${labels.join(", ")}`);

    // Find the difficulty label
    const difficultyLabel = labels.find((label) =>
      VALID_LABELS.includes(label),
    );

    if (!difficultyLabel) {
      console.log("⚠️  No valid difficulty label found. Skipping.");
      return contributors;
    }

    console.log(`✅ Found difficulty label: ${difficultyLabel}`);

    // Initialize user data if not exists
    if (!contributors[username]) {
      contributors[username] = {
        "level 1": 0,
        "level 2": 0,
        "level 3": 0,
        total_prs: 0,
        points: 0,
      };
    }

    // Update user stats
    const user = contributors[username];
    user[difficultyLabel]++;
    user.total_prs++;

    // Recalculate total points
    user.points =
      user["level 1"] * POINTS["level 1"] +
      user["level 2"] * POINTS["level 2"] +
      user["level 3"] * POINTS["level 3"];

    console.log(`📊 Updated stats for ${username}:`, user);
  } catch (error) {
    console.error(`❌ Error processing PR #${prNumber}:`, error.message);
  }

  return contributors;
}

async function main() {
  // Check if running in GitHub Actions
  const github = require("@actions/github");
  const core = require("@actions/core");

  let octokit;
  let owner, repo;

  try {
    // Initialize GitHub client
    const token = process.env.GITHUB_TOKEN;
if (!token) {
  throw new Error('GitHub token not found. Set GITHUB_TOKEN environment variable.');
}
    
>
    octokit = github.getOctokit(token);

    // Get repository info
    if (process.env.GITHUB_REPOSITORY) {
      [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    } else {
      // For local testing, you can set these manually
      owner = process.env.REPO_OWNER || "your-username";
      repo = process.env.REPO_NAME || "your-repo";
    }

    console.log(`🏠 Repository: ${owner}/${repo}`);

    // Load existing contributors data
    const contributorsFile = path.join(process.cwd(), "contributors.json");
    let contributors = {};

    if (fs.existsSync(contributorsFile)) {
      try {
        const data = fs.readFileSync(contributorsFile, "utf8");
        contributors = JSON.parse(data);
        console.log("📂 Loaded existing contributors data");
      } catch (error) {
        console.error("Error reading contributors.json:", error.message);
        contributors = {};
      }
    } else {
      console.log("📄 Creating new contributors.json file");
    }

    // Fetch all merged PRs
    const mergedPRs = await fetchAllMergedPRs(octokit, owner, repo);

    // Process each PR
    console.log("\n🔄 Processing merged PRs...");
    for (const pr of mergedPRs) {
      contributors = await processPR(octokit, owner, repo, pr, contributors);
    }

    // Save updated contributors data
    try {
      fs.writeFileSync(contributorsFile, JSON.stringify(contributors, null, 2));
      console.log("\n✅ Updated contributors.json");
    } catch (error) {
      console.error("Error writing contributors.json:", error.message);
      process.exit(1);
    }

    // Generate CONTRIBUTORS.md
    generateContributorsMarkdown(contributors);

    console.log("\n🎉 Past contributions processing completed!");
  } catch (error) {
    console.error("❌ Fatal error:", error.message);
    if (core) {
      core.setFailed(`Failed to process past contributions: ${error.message}`);
    }
    process.exit(1);
  }
}

function generateContributorsMarkdown(contributors) {
  const contributorsFile = path.join(process.cwd(), "CONTRIBUTORS.md");

  // Sort contributors by total points (descending), then by total PRs
  const sortedContributors = Object.entries(contributors).sort(
    ([, a], [, b]) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      return b.total_prs - a.total_prs;
    },
  );

  let markdown = `# 🏆 Contributors Leaderboard

Thank you to all our amazing contributors! This leaderboard tracks contributions based on merged pull requests.

## 📊 Scoring System

- **Level 1** (🟢): 4 points
- **Level 2** (🟡): 7 points  
- **Level 3** (🔴): 10 points

## 🎯 Leaderboard

| Rank | Username | Level 1 PRs | Level 2 PRs | Level 3 PRs | Total PRs | Total Points |
|------|----------|-------------|-------------|-------------|-----------|--------------|
`;

  if (sortedContributors.length === 0) {
    markdown += `| - | *No contributions yet* | - | - | - | - | - |\n`;
  } else {
    sortedContributors.forEach(([username, stats], index) => {
      const rank = index + 1;
      const medal =
        rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : `${rank}.`;

      markdown += `| ${medal} | [@${username}](https://github.com/${username}) | ${stats["level 1"]} 🟢 | ${stats["level 2"]} 🟡 | ${stats["level 3"]} 🔴 | ${stats.total_prs} | **${stats.points}** |\n`;
    });
  }

  markdown += `\n---

*Last updated: ${new Date().toISOString().split("T")[0]}*

*To contribute, make sure your PR has one of the difficulty labels: \`level 1\`, \`level 2\`, or \`level 3\`*
`;

  try {
    fs.writeFileSync(contributorsFile, markdown);
    console.log("✅ Generated CONTRIBUTORS.md");
  } catch (error) {
    console.error("Error writing CONTRIBUTORS.md:", error.message);
    process.exit(1);
  }
}

// Run the script
main();
