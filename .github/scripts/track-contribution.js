#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Points system
const POINTS = {
  easy: 4,
  medium: 7,
  hard: 10
};

// Valid difficulty labels
const VALID_LABELS = ['easy', 'medium', 'hard'];

function main() {
  // Get command line arguments
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.error('Usage: node track-contribution.js <username> <labels> <pr_number>');
    process.exit(1);
  }
  
  const username = args[0];
  const labelsString = args[1];
  const prNumber = parseInt(args[2]);
  
  console.log(`Tracking contribution for user: ${username}`);
  console.log(`PR #${prNumber} with labels: ${labelsString}`);
  
  // Parse labels
  const labels = labelsString ? labelsString.split(',').map(l => l.trim().toLowerCase()) : [];
  
  // Find the difficulty label
  const difficultyLabel = labels.find(label => VALID_LABELS.includes(label));
  
  if (!difficultyLabel) {
    console.log('⚠️  No valid difficulty label found (easy, medium, hard). Skipping contribution tracking.');
    return;
  }
  
  console.log(`Found difficulty label: ${difficultyLabel}`);
  
  // Load existing contributors data
  const contributorsFile = path.join(process.cwd(), 'contributors.json');
  let contributors = {};
  
  if (fs.existsSync(contributorsFile)) {
    try {
      const data = fs.readFileSync(contributorsFile, 'utf8');
      contributors = JSON.parse(data);
      console.log('Loaded existing contributors data');
    } catch (error) {
      console.error('Error reading contributors.json:', error.message);
      contributors = {};
    }
  } else {
    console.log('Creating new contributors.json file');
  }
  
  // Initialize user data if not exists
  if (!contributors[username]) {
    contributors[username] = {
      easy: 0,
      medium: 0,
      hard: 0,
      total_prs: 0,
      points: 0
    };
  }
  
  // Update user stats
  const user = contributors[username];
  user[difficultyLabel]++;
  user.total_prs++;
  
  // Recalculate total points
  user.points = (user.easy * POINTS.easy) + (user.medium * POINTS.medium) + (user.hard * POINTS.hard);
  
  console.log(`Updated stats for ${username}:`, user);
  
  // Save updated contributors data
  try {
    fs.writeFileSync(contributorsFile, JSON.stringify(contributors, null, 2));
    console.log('✅ Updated contributors.json');
  } catch (error) {
    console.error('Error writing contributors.json:', error.message);
    process.exit(1);
  }
  
  // Generate CONTRIBUTORS.md
  generateContributorsMarkdown(contributors);
}

function generateContributorsMarkdown(contributors) {
  const contributorsFile = path.join(process.cwd(), 'CONTRIBUTORS.md');
  
  // Sort contributors by total points (descending), then by total PRs
  const sortedContributors = Object.entries(contributors)
    .sort(([, a], [, b]) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      return b.total_prs - a.total_prs;
    });
  
  let markdown = `# 🏆 Contributors Leaderboard

Thank you to all our amazing contributors! This leaderboard tracks contributions based on merged pull requests.

## 📊 Scoring System

- **Easy** (🟢): 4 points
- **Medium** (🟡): 7 points  
- **Hard** (🔴): 10 points

## 🎯 Leaderboard

| Rank | Username | Easy PRs | Medium PRs | Hard PRs | Total PRs | Total Points |
|------|----------|----------|------------|----------|-----------|--------------|
`;

  sortedContributors.forEach(([username, stats], index) => {
    const rank = index + 1;
    const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
    
    markdown += `| ${medal} | [@${username}](https://github.com/${username}) | ${stats.easy} 🟢 | ${stats.medium} 🟡 | ${stats.hard} 🔴 | ${stats.total_prs} | **${stats.points}** |\n`;
  });
  
  markdown += `\n---

*Last updated: ${new Date().toISOString().split('T')[0]}*

*To contribute, make sure your PR has one of the difficulty labels: \`easy\`, \`medium\`, or \`hard\`*
`;
  
  try {
    fs.writeFileSync(contributorsFile, markdown);
    console.log('✅ Generated CONTRIBUTORS.md');
  } catch (error) {
    console.error('Error writing CONTRIBUTORS.md:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
