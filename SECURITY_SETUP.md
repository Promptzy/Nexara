# Security Setup for GitHub Bot

## Recommended Security Measures

### 1. Repository Secrets
Go to your repository Settings → Secrets and variables → Actions and add:
- `MERGE_AUTHORIZED_USERS`: Comma-separated list of GitHub usernames who can merge (e.g., "va16hav07,another-user")

### 2. Branch Protection Rules
Set up branch protection for your main branch:
1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - Require pull request reviews before merging
   - Require status checks to pass before merging
   - Restrict pushes that create files that match the path `.github/workflows/*`
   - Include administrators (this prevents even admins from bypassing rules)

### 3. Workflow Permissions
1. Go to Settings → Actions → General
2. Set "Workflow permissions" to "Read repository contents and package permissions"
3. Uncheck "Allow GitHub Actions to create and approve pull requests"

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
