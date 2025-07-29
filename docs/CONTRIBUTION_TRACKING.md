# Contribution Tracking S**Contributors earn points based on the difficulty of their merged PRs:**

- Level 1: 4 points
- Level 2: 7 points
- Level 3: 10 points

This repository uses an automated system to track and reward contributions based on merged pull requests.

## How It Works

### 🏷️ Labeling System

Every pull request should be labeled with one of the following difficulty labels:

- **`level 1`** - Simple bug fixes, documentation updates, minor improvements (4 points)
- **`level 2`** - Feature implementations, moderate bug fixes, refactoring (7 points)  
- **`level 3`** - Complex features, architectural changes, performance optimizations (10 points)

### 🤖 Automated Tracking

When a pull request with a difficulty label is merged:

1. The GitHub Action automatically triggers
2. The contribution is recorded in `contributors.json`
3. The leaderboard in `CONTRIBUTORS.md` is updated
4. Changes are committed back to the repository

### 📊 Scoring

Contributors earn points based on the difficulty of their merged PRs:

- Easy: 4 points
- Medium: 7 points
- Hard: 10 points

### 🏆 Leaderboard

The `CONTRIBUTORS.md` file contains a live leaderboard showing:

- Contributor ranking by total points
- Breakdown of easy/medium/hard PRs
- Total PRs and points for each contributor

## For Maintainers

### Adding Labels

Make sure to add the difficulty labels to your repository:

1. Go to Issues → Labels
2. Create these labels if they don't exist:
   - `level 1` (green color recommended)
   - `level 2` (yellow color recommended)
   - `level 3` (red color recommended)

### Manual Updates

If you need to manually update the contribution data:

1. Edit `contributors.json` directly
2. Run the script to regenerate the markdown:
   ```bash
   cd .github/scripts
   node track-contribution.js <username> <label> <pr_number>
   ```

### Files Structure

```
.github/
├── workflows/
│   └── track-contributions.yml    # GitHub Action workflow
└── scripts/
    ├── package.json              # Node.js dependencies
    └── track-contribution.js     # Main tracking script
contributors.json                 # Raw contributor data
CONTRIBUTORS.md                   # Generated leaderboard
```

## For Contributors

1. Make your changes and create a pull request
2. Maintainers will add an appropriate difficulty label
3. Once merged, your contribution will automatically be tracked
4. Check the `CONTRIBUTORS.md` file to see your progress!

## Troubleshooting

### PR Not Tracked

If a merged PR isn't showing up in the leaderboard:

1. Check if the PR had a valid difficulty label (`level 1`, `level 2`, or `level 3`)
2. Verify the GitHub Action ran successfully in the Actions tab
3. Check the Action logs for any error messages

### Missing Dependencies

If the Node.js script fails, ensure the dependencies are installed:

```bash
cd .github/scripts
npm install
```

### Permission Issues

The workflow needs these permissions:
- `contents: write` - to update files
- `pull-requests: read` - to read PR information

Make sure these are set in the workflow file.
