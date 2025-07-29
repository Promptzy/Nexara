#!/bin/bash

# Test script to verify contribution tracking is working
echo "🧪 Testing Contribution Tracking System"
echo "========================================"

echo ""
echo "This script tests the contribution tracking functionality."
echo ""

# Check if we're in the correct directory
if [ ! -f ".github/scripts/track-contribution.js" ]; then
    echo "❌ Not in the project root or tracking script missing."
    exit 1
fi

echo "✅ Found tracking script"
echo ""

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js to run tests."
    exit 1
fi

echo "✅ Node.js is available"
echo ""

# Test the tracking script with different scenarios
echo "📋 Testing Contribution Tracking:"
echo "=================================="
echo ""

# Backup existing files if they exist
if [ -f "contributors.json" ]; then
    cp contributors.json contributors.json.backup
    echo "📁 Backed up existing contributors.json"
fi

if [ -f "CONTRIBUTORS.md" ]; then
    cp CONTRIBUTORS.md CONTRIBUTORS.md.backup
    echo "📁 Backed up existing CONTRIBUTORS.md"
fi

echo ""

# Test 1: Level 1 contribution
echo "🧪 Test 1: Level 1 contribution"
echo "Running: node .github/scripts/track-contribution.js testuser1 'level 1' 101"
cd .github/scripts && npm install > /dev/null 2>&1 && cd ../..
node .github/scripts/track-contribution.js "testuser1" "level 1" 101

if [ $? -eq 0 ]; then
    echo "✅ Level 1 test passed"
else
    echo "❌ Level 1 test failed"
fi

echo ""

# Test 2: Level 2 contribution
echo "🧪 Test 2: Level 2 contribution"
echo "Running: node .github/scripts/track-contribution.js testuser2 'level 2' 102"
node .github/scripts/track-contribution.js "testuser2" "level 2" 102

if [ $? -eq 0 ]; then
    echo "✅ Level 2 test passed"
else
    echo "❌ Level 2 test failed"
fi

echo ""

# Test 3: Level 3 contribution
echo "🧪 Test 3: Level 3 contribution"
echo "Running: node .github/scripts/track-contribution.js testuser1 'level 3' 103"
node .github/scripts/track-contribution.js "testuser1" "level 3" 103

if [ $? -eq 0 ]; then
    echo "✅ Level 3 test passed"
else
    echo "❌ Level 3 test failed"
fi

echo ""

# Test 4: Invalid label (should be skipped)
echo "🧪 Test 4: Invalid label (should be skipped)"
echo "Running: node .github/scripts/track-contribution.js testuser3 'invalid-label' 104"
node .github/scripts/track-contribution.js "testuser3" "invalid-label" 104

if [ $? -eq 0 ]; then
    echo "✅ Invalid label test passed (correctly skipped)"
else
    echo "❌ Invalid label test failed"
fi

echo ""

# Display results
echo "📊 Test Results:"
echo "================"
echo ""

if [ -f "contributors.json" ]; then
    echo "📄 Generated contributors.json:"
    cat contributors.json
    echo ""
else
    echo "❌ contributors.json was not created"
fi

if [ -f "CONTRIBUTORS.md" ]; then
    echo "📄 Generated CONTRIBUTORS.md:"
    head -30 CONTRIBUTORS.md
    echo ""
else
    echo "❌ CONTRIBUTORS.md was not created"
fi

echo "🔍 Verification Checklist:"
echo "=========================="
echo ""
echo "Check the following:"
echo "  ✅ contributors.json contains test user data"
echo "  ✅ CONTRIBUTORS.md shows leaderboard with test users"
echo "  ✅ Points are calculated correctly:"
echo "     - testuser1: 4 (level 1) + 10 (level 3) = 14 points"
echo "     - testuser2: 7 (level 2) = 7 points"
echo "     - testuser3: Not included (invalid label)"
echo "  ✅ Users are ranked by total points"
echo ""

echo "♻️  Cleanup:"
echo "============"
echo ""
echo "Test files created. To restore original state:"
echo "  - Remove test entries from contributors.json"
echo "  - Or restore from backup files"
echo ""

if [ -f "contributors.json.backup" ]; then
    echo "To restore original contributors.json:"
    echo "  mv contributors.json.backup contributors.json"
fi

if [ -f "CONTRIBUTORS.md.backup" ]; then
    echo "To restore original CONTRIBUTORS.md:"
    echo "  mv CONTRIBUTORS.md.backup CONTRIBUTORS.md"
fi

echo ""
echo "✅ Contribution tracking test complete!"
echo ""
echo "🤖 Next Steps:"
echo "=============="
echo "1. Create a test PR with difficulty labels (level 1, level 2, or level 3)"
echo "2. Merge the PR to trigger automatic tracking"
echo "3. Check if contributors.json and CONTRIBUTORS.md are updated"
echo "4. Verify the workflow runs successfully in the Actions tab"
