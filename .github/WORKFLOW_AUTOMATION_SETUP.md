# Repository Configuration for Automatic Workflow Execution

This file contains the recommended GitHub repository settings to ensure all workflows run automatically without manual approval.

## Required Repository Settings

### 1. Actions General Settings
Go to: **Settings** → **Actions** → **General**

**Actions permissions:**
- ☑️ Allow all actions and reusable workflows

**Artifact and log retention:**
- Set to 90 days (or as needed)

**Fork pull request workflows:**
- ☑️ Run workflows from fork pull requests
- ☑️ Send write tokens to workflows from fork pull requests  
- ☑️ Send secrets to workflows from fork pull requests

**Workflow permissions:**
- ☑️ Read and write permissions
- ☑️ Allow GitHub Actions to create and approve pull requests

### 2. Branch Protection Rules (Optional but Recommended)
Go to: **Settings** → **Branches** → **Add rule**

For `main` branch:
- ☑️ Require status checks to pass before merging
- ☑️ Require branches to be up to date before merging
- Add status checks: All workflow names you want to be required
- ☑️ Dismiss stale PR approvals when new commits are pushed
- ☑️ Require review from CODEOWNERS

### 3. Security Settings
Go to: **Settings** → **Code security and analysis**

**Dependency graph:**
- ☑️ Enable dependency graph

**Dependabot alerts:**
- ☑️ Enable Dependabot alerts

**Dependabot security updates:**
- ☑️ Enable Dependabot security updates

## Automatic Workflow Features

With these settings, the following workflows will run automatically:

### On Pull Request Events:
- ✅ **Label Assignment** - Automatically labels PRs based on files changed
- ✅ **Size Labeling** - Adds size labels (XS, S, M, L, XL) based on lines changed  
- ✅ **Difficulty Check** - Reminds maintainers to add difficulty labels
- ✅ **Code Quality** - Runs linting and formatting checks
- ✅ **Tests** - Runs frontend and backend test suites
- ✅ **Build Verification** - Ensures code builds successfully

### On Merge Events:
- ✅ **Contribution Tracking** - Updates contributor leaderboard
- ✅ **Issue Closing** - Automatically closes linked issues
- ✅ **Release Notes** - Updates changelog (if configured)

### Manual Commands:
- `/rerun` - Re-runs all failed workflows and approves waiting ones
- `/check` - Runs all workflows and checks for a PR (great for new contributors)
- `/approve` - Approves PR and optionally auto-merges
- `/merge` - Merges PR and closes linked issues
- Other slash commands as documented

## Troubleshooting

### If workflows still require approval:

1. **Check repository settings** above
2. **For new contributors**: Use `/check` command to manually run all workflows
3. **Use `/rerun` command** to manually approve and re-run workflows
4. **Contact maintainers** if issues persist

### Common Issues and Solutions:

**NPM Cache Errors:**
- ✅ Fixed in code-quality.yml - no longer caches npm globally
- ✅ Frontend/backend workflows cache correctly using subdirectory paths
- ✅ Node.js setup is now conditional based on file changes

**Workflow Triggers:**
- ✅ Workflows now use proper path filtering to avoid unnecessary runs
- ✅ `.github` directory changes only trigger relevant workflows
- ✅ Frontend/backend changes only trigger their respective workflows

### Adding trusted contributors:

Edit `.github/workflows/auto-run-pr-workflows.yml` and add usernames to the `trustedContributors` array:

```yaml
const trustedContributors = [
  'Va16hav07',
  'Pranjal6955',
  'your-username-here'
];
```

## Implementation Status

- ✅ Auto-approval for trusted contributors
- ✅ Auto-approval for documentation changes  
- ✅ Auto-approval for small changes (<100 lines)
- ✅ Manual `/rerun` command for workflow re-execution
- ✅ Comprehensive error handling and reporting
- ✅ Integration with contribution tracking system

## Support

If you encounter issues with workflow automation:

1. Check the **Actions** tab for workflow status
2. Use `/check` command to run all workflows fresh  
3. Use `/rerun` command for failed workflows
4. Contact repository maintainers: @Va16hav07, @Pranjal6955
5. Review this configuration file for settings verification
6. Run test script: `.github/scripts/test-workflow-triggers.sh`
