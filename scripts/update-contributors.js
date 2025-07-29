// scripts/update-contributors.js
import { readFile, writeFile } from 'fs/promises';
import fetch from 'node-fetch';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = process.env.GITHUB_REPOSITORY;
const PR_NUMBER = process.env.PR_NUMBER;

if (!GITHUB_TOKEN || !REPO || !PR_NUMBER) {
  console.error('Missing required environment variables.');
  process.exit(1);
}

const headers = {
  'Authorization': `Bearer ${GITHUB_TOKEN}`,
  'Accept': 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

async function getPRInfo() {
  const url = `https://api.github.com/repos/${REPO}/pulls/${PR_NUMBER}`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error('Failed to fetch PR info');
  return res.json();
}

async function getPRLabels() {
  const url = `https://api.github.com/repos/${REPO}/issues/${PR_NUMBER}/labels`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error('Failed to fetch PR labels');
  return res.json();
}

async function updateContributors() {
  const pr = await getPRInfo();
  const labels = await getPRLabels();
  const username = pr.user.login;
  let type = null;
  for (const label of labels) {
    if (["easy", "medium", "hard"].includes(label.name)) {
      type = label.name;
      break;
    }
  }
  if (!type) {
    console.error('No valid difficulty label found.');
    process.exit(1);
  }
  const pointsMap = { easy: 4, medium: 7, hard: 10 };
  let contributors = {};
  try {
    contributors = JSON.parse(await readFile('contributors.json', 'utf8'));
  } catch (e) {
    contributors = {};
  }
  if (!contributors[username]) {
    contributors[username] = { easy: 0, medium: 0, hard: 0, total_prs: 0, points: 0 };
  }
  contributors[username][type] += 1;
  contributors[username].total_prs += 1;
  contributors[username].points += pointsMap[type];
  await writeFile('contributors.json', JSON.stringify(contributors, null, 2));
  await writeContributorsMD(contributors);
}

async function writeContributorsMD(contributors) {
  const sorted = Object.entries(contributors).sort((a, b) => b[1].points - a[1].points);
  let md = '| Username | Easy PRs | Medium PRs | Hard PRs | Total PRs | Total Points |\n|---|---|---|---|---|---|\n';
  for (const [user, stats] of sorted) {
    md += `| @${user} | ${stats.easy} | ${stats.medium} | ${stats.hard} | ${stats.total_prs} | ${stats.points} |\n`;
  }
  await writeFile('CONTRIBUTORS.md', md);
}

updateContributors().catch(e => { console.error(e); process.exit(1); }); 