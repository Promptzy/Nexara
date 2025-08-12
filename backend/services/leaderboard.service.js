const axios = require('axios');

const owner = 'Promptzy';
const repo = 'Nexara';

async function getRegularContributors() {
  try {
    // 1️⃣ Contributors List
    const contributorsRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contributors`,
      { headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` } }
    );

    let contributors = contributorsRes.data
      .filter(c => !c.login.toLowerCase().includes('gssoc'))
      .filter(c => !c.login.includes('[bot]'));

    // 2️⃣ Fetch commits + issues closed for each contributor
    const results = await Promise.all(
      contributors.map(async contributor => {
        const username = contributor.login;

        // Commits count (same as PRs + direct commits)
        const commitsCount = contributor.contributions;

        // Issues Closed Count
        const issuesRes = await axios.get(
          `https://api.github.com/search/issues?q=repo:${owner}/${repo}+type:issue+state:closed+author:${username}`,
          { headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` } }
        );
        const issuesClosed = issuesRes.data.total_count;

        return {
          username,
          prsMerged: contributor.contributions, // here we assume contributions ~ PRs merged
          commits: commitsCount,
          issuesClosed: issuesClosed,
        };
      })
    );

    return results;
  } catch (error) {
    console.error('Error fetching contributors:', error.message);
    return [];
  }
}

module.exports = { getRegularContributors };
