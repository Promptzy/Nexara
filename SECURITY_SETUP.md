# Security Setup for GitHub Bot (Organization Repository)

## Required Setup Steps for Organization Repository

### 1. Create Personal Access Token (REQUIRED for Organizations)
Organization repositories need a Personal Access Token for repository dispatch actions:

**IMPORTANT**: You must create this token and add it as a repository secret named `PAT_TOKEN`

1. Go to GitHub Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Click "Generate new token"
3. Select your organization (`Promptzy`) and repository (`Zenjira`)
4. Set expiration (recommend 1 year)
5. Grant the following permissions:
   - **Repository permissions:**
     - Contents: Read
     - Issues: Write
     - Pull requests: Write
     - Metadata: Read
     - Actions: Write (for repository_dispatch)
     - Administration: Read (sometimes needed for org repos)

6. Copy the generated token

**Alternative**: If fine-grained tokens don't work, try a classic token with `repo` and `workflow` scopes.

**Creating a Classic Token (Alternative method):**
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token" → "Generate new token (classic)"
3. Select scopes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
4. Click "Generate token"
5. Copy the token immediately (you won't see it again)

### 2. Add Repository Secrets (REQUIRED)
Go to your repository Settings → Secrets and variables → Actions and add:
- `PAT_TOKEN`: The Personal Access Token you just created (**THIS IS CRITICAL**)
- `MERGE_AUTHORIZED_USERS`: Comma-separated list of GitHub usernames who can merge (e.g., "va16hav07,another-user")

**To add the PAT_TOKEN secret:**
1. Go to https://github.com/Promptzy/Zenjira/settings/secrets/actions
2. Click "New repository secret"
3. Name: `PAT_TOKEN`
4. Value: Paste your Personal Access Token
5. Click "Add secret"

**Verification**: After adding the secret, you should see `PAT_TOKEN` listed in your repository secrets.

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
This error occurs because the `PAT_TOKEN` secret is either:
1. **Not set** - You haven't created the `PAT_TOKEN` repository secret
2. **Invalid** - The Personal Access Token doesn't have sufficient permissions
3. **Wrong type** - Try using a classic token instead of fine-grained

**Step-by-step fix:**
1. ✅ Create a Personal Access Token (see step 1 above)
2. ✅ Add it as repository secret named `PAT_TOKEN` (see step 2 above)
3. ✅ Test it by running the "Test PAT Token" workflow manually
4. ✅ Try your slash command again

### ✅ "Resource not accessible by integration" Error - RESOLVED
This error was fixed by creating a Classic Personal Access Token with proper permissions.

**Current Status**: ✅ PAT token is working correctly for both repository access and dispatch events.

### ✅ "Cannot read properties of undefined (reading 'client_payload')" Error - RESOLVED
This error was fixed by adding proper validation to all command workflows to check for valid slash command dispatch events.

**Current Status**: ✅ All workflows now handle invalid triggers gracefully.

### Testing the Bot
Try these commands in an issue or pull request:
- `/assign @username` - Should assign the user
- `/bug` or `/feature` - Should add labels
- `/merge` - Should merge (only if you're authorized)
- `/review @username` - Should request review (PR only)

### ✅ Setup Complete!
Your GitHub bot is now fully configured and ready to use. All known issues have been resolved and the bot should work reliably.
