# Security Setup for GitHub Bot (Organization Repository)

## Required Setup Steps for Organization Repository

### 1. Organization/Repository Settings
Since this is an organization repository, you need to configure permissions at the organization level:

#### Organization Settings:
1. Go to Organization Settings → Actions → General
2. Set "Actions permissions" to "Allow all actions and reusable workflows"
3. Set "Workflow permissions" to "Read and write permissions"
4. Check "Allow GitHub Actions to create and approve pull requests"

#### Repository Settings:
1. Go to Repository Settings → Actions → General
2. Inherit organization settings or set:
   - "Actions permissions": Allow all actions and reusable workflows
   - "Workflow permissions": Read and write permissions
   - Check "Allow GitHub Actions to create and approve pull requests"

### 2. Repository Secrets (if needed)
Go to your repository Settings → Secrets and variables → Actions and add:
- `MERGE_AUTHORIZED_USERS`: Comma-separated list of GitHub usernames who can merge (e.g., "va16hav07,another-user")

**Note**: For organization repositories, the default `GITHUB_TOKEN` usually has sufficient permissions, so you might not need a Personal Access Token.

### 3. Organization Member Permissions
Ensure that users who will use the bot commands have appropriate permissions:
- **Write access** to the repository for most commands
- **Admin access** might be needed for certain operations

### 4. Branch Protection Rules (Recommended)
Set up branch protection for your main branch:
1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - Require pull request reviews before merging
   - Require status checks to pass before merging
   - Restrict pushes that create files that match the path `.github/workflows/*`
   - Include administrators

### 5. CODEOWNERS Protection
The `.github/CODEOWNERS` file requires approval from `@va16hav07` for workflow changes, providing additional security even in an organization setting.

### 4. CODEOWNERS File
Create a `.github/CODEOWNERS` file to require review for workflow changes:
```
.github/workflows/ @va16hav07
```

### 5. Environment Protection (Optional)
1. Go to Settings → Environments
2. Create environment named "merge-protection"
3. Add protection rules:
   - Required reviewers: va16hav07
   - Deployment branches: Selected branches (main)

## Current Implementation Security

The current `/merge` command implementation:
- Uses repository secrets for authorized users list
- Validates the actor against the secret
- Provides clear feedback on unauthorized attempts
- Falls back to hardcoded user if secret is not set

Even if someone modifies the workflow file, they cannot:
- Access or modify the repository secrets
- Bypass branch protection rules (if configured)
- Override the CODEOWNERS review requirements
