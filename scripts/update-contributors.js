// scripts/update-contributors.js
import { readFile, writeFile } from 'fs/promises';
import fetch from 'node-fetch';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = process.env.GITHUB_REPOSITORY;

if (!GITHUB_TOKEN || !REPO) {
  console.error('Missing required environment variables.');
  process.exit(1);
}

const headers = {
  'Authorization': `Bearer ${GITHUB_TOKEN}`,
  'Accept': 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

const pointsMap = { easy: 4, medium: 7, hard: 10 };
const difficultyLabels = ["easy", "medium", "hard", "meduim"];

function normalizeLabel(label) {
  const l = label.toLowerCase();
  if (l === 'easy') return 'easy';
  if (l === 'medium' || l === 'meduim') return 'medium';
  if (l === 'hard') return 'hard';
  return null;
}

async function fetchAllMergedPRs() {
  let prs = [];
  let page = 1;
  while (true) {
    const url = `https://api.github.com/repos/${REPO}/pulls?state=closed&per_page=100&page=${page}`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error('Failed to fetch PRs');
    const data = await res.json();
    if (data.length === 0) break;
    prs = prs.concat(data.filter(pr => pr.merged_at));
    page++;
  }
  return prs;
}

async function fetchLabelsForPR(prNumber) {
  const url = `https://api.github.com/repos/${REPO}/issues/${prNumber}/labels`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error('Failed to fetch PR labels');
  return res.json();
}

async function updateContributors() {
  const mergedPRs = await fetchAllMergedPRs();
  let contributors = {};
  for (const pr of mergedPRs) {
    const username = pr.user.login;
    const labels = await fetchLabelsForPR(pr.number);
    const found = labels.find(label => normalizeLabel(label.name));
    const type = found ? normalizeLabel(found.name) : null;
    if (!type) continue;
    if (!contributors[username]) {
      contributors[username] = { easy: 0, medium: 0, hard: 0, total_prs: 0, points: 0 };
    }
    contributors[username][type] += 1;
    contributors[username].total_prs += 1;
    contributors[username].points += pointsMap[type];
  }
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