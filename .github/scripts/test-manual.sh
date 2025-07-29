#!/bin/bash

# Simple manual test for contribution tracking
echo "🧪 Manual Contribution Tracking Test"
echo "===================================="

echo ""
echo "Testing the tracking system with a simulated scenario..."
echo ""

# Test with a realistic scenario
echo "📝 Simulating a merged PR with level 2 difficulty:"
echo "  - User: contributor123"
echo "  - PR: #999"
echo "  - Labels: level 2, frontend, javascript"
echo ""

# Run the tracking script
node .github/scripts/track-contribution.js "contributor123" "level 2,frontend,javascript" 999

echo ""
echo "📊 Results:"
echo "==========="

if [ -f "contributors.json" ]; then
    echo "✅ contributors.json updated:"
    echo ""
    cat contributors.json | jq .
    echo ""
else
    echo "❌ contributors.json not found"
fi

if [ -f "CONTRIBUTORS.md" ]; then
    echo "✅ CONTRIBUTORS.md updated:"
    echo ""
    head -25 CONTRIBUTORS.md
    echo ""
else
    echo "❌ CONTRIBUTORS.md not found"
fi

echo "🎯 Expected Results:"
echo "==================="
echo "  - contributor123 should have 1 level 2 PR"
echo "  - contributor123 should have 7 points"
echo "  - CONTRIBUTORS.md should show the leaderboard"
echo ""
echo "✅ Manual test complete!"
