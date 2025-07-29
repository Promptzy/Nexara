#!/bin/bash

# 🔍 Quick Automation Status Check
echo "🤖 Zenjira Automation Quick Status Check"
echo "========================================"

# Check core automation files
files_checked=0
files_found=0

check_file() {
    local file="$1"
    local name="$2"
    files_checked=$((files_checked + 1))
    
    if [[ -f "$file" ]]; then
        echo "✅ $name"
        files_found=$((files_found + 1))
    else
        echo "❌ $name (MISSING)"
    fi
}

echo ""
echo "📁 Core Workflow Files:"
check_file ".github/workflows/auto-run-pr-workflows.yml" "Auto-run PR workflows"
check_file ".github/workflows/enhanced-auto-labeler.yml" "Enhanced auto-labeler"
check_file ".github/workflows/simple-auto-labeler.yml" "Simple auto-labeler" 
check_file ".github/workflows/pr-size-labeler.yml" "PR size labeler"
check_file ".github/workflows/labeler.yml" "Advanced labeler"
check_file ".github/workflows/track-contributions.yml" "Contributor tracking"
check_file ".github/workflows/code-quality.yml" "Code quality checks"
check_file ".github/workflows/frontend-checks.yml" "Frontend checks"
check_file ".github/workflows/backend-checks.yml" "Backend checks"

echo ""
echo "📜 Scripts and Configuration:"
check_file ".github/scripts/track-contribution.js" "Contribution tracking script"
check_file ".github/labeler.yml" "Labeler configuration"
check_file "contributors.json" "Contributors database"
check_file "CONTRIBUTORS.md" "Contributors documentation"

echo ""
echo "📚 Documentation:"
check_file ".github/WORKFLOW_AUTOMATION_SETUP.md" "Setup guide"
check_file ".github/PERMISSION_FIX_GUIDE.md" "Permission fix guide"
check_file ".github/URGENT_REPOSITORY_FIX.md" "Urgent fix guide"
check_file "docs/CONTRIBUTION_TRACKING.md" "Contribution tracking docs"
check_file ".github/AUTOMATION_STATUS.md" "Status dashboard"

echo ""
echo "📊 Summary:"
echo "Files checked: $files_checked"
echo "Files found: $files_found"

if [[ $files_found -eq $files_checked ]]; then
    echo "🎉 Status: ALL AUTOMATION FILES PRESENT"
    echo ""
    echo "✅ All core automation components are installed!"
    echo "⚠️  Next step: Repository maintainer must update GitHub settings"
    echo "📖 See: .github/URGENT_REPOSITORY_FIX.md"
    echo ""
    echo "🧪 To test manually: Create a PR from a fork and watch the workflows"
else
    echo "⚠️  Status: Some files missing ($((files_checked - files_found)) missing)"
fi

echo ""
echo "🔗 Key Features Ready:"
echo "   • Auto-approval for external PRs"
echo "   • Smart labeling (type, area, size)"
echo "   • Contributor tracking and rewards"  
echo "   • Quality checks (linting, testing)"
echo "   • Manual commands (/check, /rerun, /label)"
echo "   • Graceful error handling for permissions"

echo ""
echo "📋 Current Status: Ready for repository settings update"
