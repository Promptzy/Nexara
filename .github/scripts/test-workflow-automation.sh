#!/bin/bash

# Test script to verify workflow automation is working
echo "🧪 Testing Workflow Automation"
echo "=============================="

echo ""
echo "This script helps verify that GitHub Actions workflows run automatically."
echo ""

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository. Please run this from the project root."
    exit 1
fi

# Check if we're in the correct repository
if ! ls .github/workflows/ > /dev/null 2>&1; then
    echo "❌ No .github/workflows/ directory found. Are you in the right repository?"
    exit 1
fi

echo "✅ Repository structure looks correct"
echo ""

# List available workflows
echo "📋 Available Workflows:"
echo "======================"
for workflow in .github/workflows/*.yml; do
    if [ -f "$workflow" ]; then
        name=$(grep "^name:" "$workflow" | head -1 | sed 's/name: *//' | sed 's/"//g')
        if [ ! -z "$name" ]; then
            echo "  - $name"
        fi
    fi
done

echo ""
echo "🤖 Bot Commands Available:"
echo "=========================="
echo "  - /assign @username"
echo "  - /unassign @username"
echo "  - /merge (restricted)"
echo "  - /approve [message]"
echo "  - /lgtm [message]"
echo "  - /rerun (re-run workflows)"
echo "  - /check (run all workflows - great for new contributors)"
echo "  - /review @username"
echo "  - /status"
echo "  - /bug"
echo "  - /feature"

echo ""
echo "🔧 Auto-Approval Criteria:"
echo "=========================="
echo "  ✅ Trusted contributors: Va16hav07, Pranjal6955"
echo "  ✅ Documentation-only changes (.md, docs/, README)"
echo "  ✅ Small changes (<100 lines modified)"
echo "  ✅ GitHub repo settings configured for auto-run"

echo ""
echo "📊 Testing Instructions:"
echo "========================"
echo ""
echo "1. Create a test PR with documentation changes:"
echo "   - Edit README.md or any .md file"
echo "   - Create PR - workflows should run automatically"
echo ""
echo "2. Create a test PR with small code changes:"
echo "   - Modify <100 lines of code"
echo "   - Create PR - workflows should run automatically"
echo ""
echo "3. Test the /check command (for new contributors):"
echo "   - Comment '/check' on any PR"
echo "   - Should run all workflows and checks fresh"
echo "   - Great for first-time contributors or when workflows didn't start"
echo ""
echo "4. Test the /rerun command:"
echo "   - Comment '/rerun' on any PR"
echo "   - Should re-run failed workflows and approve waiting ones"
echo ""
echo "5. Test other bot commands:"
echo "   - Comment '/status' on PR to check merge readiness"
echo "   - Comment '/assign @username' to assign PR"
echo ""

echo "🔍 Verification Steps:"
echo "====================="
echo ""
echo "After creating a PR, check:"
echo "  1. Go to 'Actions' tab in GitHub"
echo "  2. Verify workflows start automatically (no 'waiting for approval')"
echo "  3. Check PR for automatic labels (size, component, etc.)"
echo "  4. Test bot commands in PR comments"
echo ""

echo "❗ If workflows need approval:"
echo "============================="
echo "  1. Try '/check' command first - runs all workflows fresh"
echo "  2. Use '/rerun' command to manually approve and re-run existing workflows"
echo "  3. Check repository settings (see .github/WORKFLOW_AUTOMATION_SETUP.md)"
echo "  4. Contact @Va16hav07 or @Pranjal6955 for repository configuration help"

echo ""
echo "📚 Documentation:"
echo "=================="
echo "  - Workflow setup: .github/WORKFLOW_AUTOMATION_SETUP.md"
echo "  - Contribution tracking: docs/CONTRIBUTION_TRACKING.md"
echo "  - Repository settings: .github/AUTO_APPROVAL_SETTINGS.md"

echo ""
echo "✅ Test complete! Create a PR to verify everything works."
