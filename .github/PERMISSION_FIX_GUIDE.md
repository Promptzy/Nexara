# 🔧 Fixing Workflow Permission Issues

## Problem

Contributors are getting **403 "Resource not accessible by integration"** errors when workflows try to run, specifically when trying to:
- Approve waiting workflows
- Create comments on PRs
- Add labels to PRs
- Access repository resources

## Root Causes

1. **GitHub Token Limitations**: The default `GITHUB_TOKEN` has restricted permissions for security
2. **Fork Restrictions**: First-time contributors from forks have even more limited access
3. **Repository Settings**: Repository may not have proper workflow permissions configured

## 🚀 Solutions

### 1. Repository Settings (REQUIRED)

Go to **Settings → Actions → General** and configure:

#### ✅ Actions permissions:
- ☑️ **Allow all actions and reusable workflows**

#### ✅ Fork pull request workflows:
- ☑️ **Run workflows from fork pull requests**
- ☑️ **Send write tokens to workflows from fork pull requests**
- ☑️ **Send secrets to workflows from fork pull requests**

#### ✅ Workflow permissions:
- ☑️ **Read and write permissions**
- ☑️ **Allow GitHub Actions to create and approve pull requests**

### 2. Personal Access Token (RECOMMENDED)

Create a PAT for enhanced permissions:

1. Go to **Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Generate new token with scopes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
   - `write:packages` (Upload packages)
3. Add to repository secrets as `PAT_TOKEN`

### 3. Workflow Updates

The workflows now use:
```yaml
github-token: ${{ secrets.PAT_TOKEN || secrets.GITHUB_TOKEN }}
```

This tries PAT_TOKEN first, falls back to GITHUB_TOKEN.

### 4. Alternative Approach

If permissions are still an issue, use the simpler workflow:
- `simple-auto-approve.yml` - Focuses only on workflow approval without comments

## 🧪 Testing

After making changes:

1. **Create a test PR** from a different account or fork
2. **Check Actions tab** - workflows should start automatically
3. **Look for approval comments** on the PR
4. **Use `/check` command** if workflows don't start

## 🔍 Troubleshooting

### If workflows still need approval:

1. **Check repository settings** (see above)
2. **Verify PAT_TOKEN is set** in repository secrets
3. **Use manual commands**:
   - `/check` - Run all workflows fresh
   - `/rerun` - Re-run failed workflows
4. **Check workflow logs** for detailed error messages

### Common Error Messages:

- **"Resource not accessible by integration"** → Repository settings + PAT_TOKEN needed
- **"The action requires write permission to add labels"** → Labeling permissions issue
- **"Workflow runs are only visible to users with read access"** → Permissions issue
- **"Workflow approval required"** → Expected for first-time contributors without settings

### For Repository Maintainers:

If you can't change repository settings:
1. Manually approve workflows in Actions tab
2. Add trusted contributors to auto-approval list
3. Use `/approve` command on PRs
4. Contact repository owner for permission changes

## 📊 Current Status

✅ **Workflows Updated**: Enhanced error handling and PAT support  
✅ **Alternative Labelers**: Simple workflows that don't depend on external actions  
✅ **Documentation**: Complete troubleshooting guide  
✅ **Fallback Options**: Manual commands available  
⚠️ **Needs**: Repository settings + optional PAT_TOKEN  

## 🎯 Expected Behavior After Fix

1. **New PRs** automatically get workflow approval
2. **Contributors see** welcome comments and status updates
3. **Workflows run** without manual intervention
4. **Errors are** gracefully handled with fallback options

The system will work for **all contributors** once the repository permissions are properly configured!
