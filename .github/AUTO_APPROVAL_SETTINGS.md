# Configuration for GitHub Actions
# This file ensures workflows run automatically without manual approval

# Allow workflows to run automatically for all contributors
name: Repository Settings for Auto-Approval

# GitHub repository settings that can be configured:
# 1. Settings > Actions > General > "Allow GitHub Actions to create and approve pull requests"
# 2. Settings > Actions > General > "Allow all actions and reusable workflows"
# 3. Settings > Actions > General > Fork pull request workflows: "Run workflows from fork pull requests"

# For repository administrators:
# Please ensure the following settings are enabled in your repository:

# 1. Go to Settings > Actions > General
# 2. Under "Actions permissions", select "Allow all actions and reusable workflows"
# 3. Under "Fork pull request workflows", select "Run workflows from fork pull requests"
# 4. Under "Workflow permissions", select "Read and write permissions"
# 5. Check "Allow GitHub Actions to create and approve pull requests"

# These settings will ensure that:
# - Workflows run automatically without manual approval
# - Workflows can write to the repository (for contribution tracking)
# - Fork PRs can trigger workflows
# - Bot commands work properly
