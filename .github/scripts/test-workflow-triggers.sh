#!/bin/bash

# Test script to verify workflow triggers are working correctly
echo "🧪 Testing Workflow Triggers"
echo "=============================="

echo ""
echo "This script helps verify that workflows trigger correctly for different file changes."
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

echo "📋 Workflow Trigger Analysis:"
echo "============================="
echo ""

echo "🎨 Frontend workflows will trigger on:"
echo "  - Changes to frontend/** files"
echo "  - Changes to .github/workflows/frontend-checks.yml"
echo ""

echo "⚙️ Backend workflows will trigger on:"
echo "  - Changes to backend/** files"
echo "  - Changes to .github/workflows/backend-checks.yml"
echo ""

echo "🔍 Code quality workflow will trigger on:"
echo "  - Changes to frontend/** files"
echo "  - Changes to backend/** files"
echo "  - Changes to *.js, *.ts, *.json files"
echo "  - Changes to .github/workflows/code-quality.yml"
echo ""

echo "🏷️ Labeling workflows will trigger on:"
echo "  - ALL pull request changes (for labeling)"
echo "  - Changes to .github/workflows/labeler.yml"
echo "  - Changes to .github/workflows/pr-size-labeler.yml"
echo ""

echo "🤖 Bot workflows will trigger on:"
echo "  - Comments with slash commands"
echo "  - Pull request events (opened, closed, etc.)"
echo ""

echo "✅ Test Scenarios:"
echo "=================="
echo ""

echo "1. Test .github directory changes:"
echo "   - Modify .github/workflows/*.yml files"
echo "   - Should NOT trigger frontend/backend checks"
echo "   - Should only trigger labeling and auto-approval workflows"
echo ""

echo "2. Test frontend changes:"
echo "   - Modify frontend/** files"
echo "   - Should trigger frontend-checks.yml and code-quality.yml"
echo "   - Should NOT trigger backend-checks.yml"
echo ""

echo "3. Test backend changes:"
echo "   - Modify backend/** files"
echo "   - Should trigger backend-checks.yml and code-quality.yml"
echo "   - Should NOT trigger frontend-checks.yml"
echo ""

echo "4. Test mixed changes:"
echo "   - Modify both frontend and backend files"
echo "   - Should trigger both frontend and backend checks"
echo "   - Should trigger code-quality.yml for both"
echo ""

echo "5. Test documentation changes:"
echo "   - Modify *.md files only"
echo "   - Should only trigger labeling workflows"
echo "   - Should NOT trigger Node.js-based workflows"
echo ""

echo "❗ Common Issues Fixed:"
echo "======================="
echo "  ✅ Removed global npm cache from code-quality.yml"
echo "  ✅ Added conditional Node.js setup"
echo "  ✅ Added proper path filtering"
echo "  ✅ Fixed cache dependency paths"
echo ""

echo "🔧 If you still see npm cache errors:"
echo "====================================="
echo "  1. Check that package-lock.json exists in frontend/ and backend/"
echo "  2. Verify workflows have correct cache-dependency-path"
echo "  3. Make sure Node.js setup is conditional"
echo "  4. Use '/check' command to re-run workflows"
echo ""

echo "📚 Related Files:"
echo "=================="
echo "  - .github/workflows/code-quality.yml (fixed npm cache issue)"
echo "  - .github/workflows/frontend-checks.yml (has correct cache path)"
echo "  - .github/workflows/backend-checks.yml (has correct cache path)"
echo "  - .github/workflows/cmd-check.yml (new /check command)"
echo ""

echo "✅ Test complete! Create PRs with different file changes to verify fixes."
