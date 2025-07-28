# Security Setup for GitHub Bot (Organization Repository)

## Required Setup Steps for Organization Repository

### 1. Create Personal Access Token (REQUIRED for Organizations)
Organization repositories need a Personal Access Token for repository dispatch actions:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Click "Generate new token"
3. Select your organization and repository
4. Set expiration (recommend 1 year)
5. Grant the following permissions:
   - **Repository permissions:**
     - Contents: Read
     - Issues: Write
     - Pull requests: Write
     - Metadata: Read
     - Actions: Write (for repository_dispatch)

6. Copy the generated token

### 2. Add Repository Secrets (REQUIRED)
Go to your repository Settings → Secrets and variables → Actions and add:
- `PAT_TOKEN`: The Personal Access Token you just created
- `MERGE_AUTHORIZED_USERS`: Comma-separated list of GitHub usernames who can merge (e.g., "va16hav07,another-user")

### 3. Organization/Repository Settings
Configure permissions at both levels:

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

### 4. Organization Member Permissions
Ensure that users who will use the bot commands have appropriate permissions:
- **Write access** to the repository for most commands
- **Admin access** might be needed for certain operations

### 5. Branch Protection Rules (Recommended)
Set up branch protection for your main branch:
1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - Require pull request reviews before merging
   - Require status checks to pass before merging
   - Restrict pushes that create files that match the path `.github/workflows/*`
   - Include administrators

### 6. CODEOWNERS Protection
The `.github/CODEOWNERS` file requires approval from `@va16hav07` for workflow changes, providing additional security even in an organization setting.

## Current Implementation Security

The current `/merge` command implementation:
- Uses repository secrets for authorized users list
- Validates the actor against the secret
- Provides clear feedback on unauthorized attempts
- Falls back to hardcoded user if secret is not set
- Uses PAT token with fallback to GITHUB_TOKEN for maximum compatibility

Even if someone modifies the workflow file, they cannot:
- Access or modify the repository secrets
- Bypass branch protection rules (if configured)
- Override the CODEOWNERS review requirements

## Troubleshooting

### "Resource not accessible by integration" Error
This error typically occurs in organization repositories when:
1. The `PAT_TOKEN` secret is not set
2. The Personal Access Token doesn't have sufficient permissions
3. Organization settings restrict GitHub Actions permissions

**Solution**: Follow steps 1-3 above to create and configure the PAT token properly.

### Bot Reacts but Commands Don't Work
If the bot adds a reaction to your slash command but the command doesn't execute:
1. Check that the workflow files are using the correct event types (`assign-command`, `merge-command`, etc.)
2. Verify the repository has the proper workflow permissions
3. Check the Actions tab in your repository for failed workflow runs

### Testing the Bot
Try these commands in an issue or pull request:
- `/assign @username` - Should assign the user
- `/bug` or `/feature` - Should add labels
- `/merge` - Should merge (only if you're authorized)
- `/review @username` - Should request review (PR only)
