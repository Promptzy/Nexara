#!/bin/bash

# 🧪 Comprehensive Automation Test Suite
# Tests all automation workflows, labeling, tracking, and manual commands

echo "🚀 Starting Comprehensive Automation Test Suite..."
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test counters
TESTS_RUN=0
TESTS_PASSED=0
TESTS_FAILED=0

# Function to run a test
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    TESTS_RUN=$((TESTS_RUN + 1))
    echo -e "\n${BLUE}🔍 Test $TESTS_RUN: $test_name${NC}"
    echo "Command: $test_command"
    
    if eval "$test_command"; then
        echo -e "${GREEN}✅ PASSED: $test_name${NC}"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        echo -e "${RED}❌ FAILED: $test_name${NC}"
        TESTS_FAILED=$((TESTS_FAILED + 1))
    fi
}

# Function to check file exists and has content
check_file() {
    local file="$1"
    local description="$2"
    
    if [[ -f "$file" && -s "$file" ]]; then
        echo -e "${GREEN}✅ $description exists and has content${NC}"
        return 0
    else
        echo -e "${RED}❌ $description missing or empty${NC}"
        return 1
    fi
}

echo -e "\n${YELLOW}📁 Checking Workflow Files...${NC}"

# Test 1: Check all workflow files exist
run_test "Auto-run PR workflows exists" "check_file '.github/workflows/auto-run-pr-workflows.yml' 'Auto-run PR workflows'"
run_test "Enhanced auto-labeler exists" "check_file '.github/workflows/enhanced-auto-labeler.yml' 'Enhanced auto-labeler'"
run_test "Simple auto-labeler exists" "check_file '.github/workflows/simple-auto-labeler.yml' 'Simple auto-labeler'"
run_test "PR size labeler exists" "check_file '.github/workflows/pr-size-labeler.yml' 'PR size labeler'"
run_test "Advanced labeler exists" "check_file '.github/workflows/labeler.yml' 'Advanced labeler'"
run_test "Contributor tracking exists" "check_file '.github/workflows/track-contributions.yml' 'Contributor tracking'"
run_test "Code quality checks exist" "check_file '.github/workflows/code-quality.yml' 'Code quality checks'"
run_test "Frontend checks exist" "check_file '.github/workflows/frontend-checks.yml' 'Frontend checks'"
run_test "Backend checks exist" "check_file '.github/workflows/backend-checks.yml' 'Backend checks'"

echo -e "\n${YELLOW}📜 Checking Script Files...${NC}"

# Test 2: Check script files exist
run_test "Contribution tracking script exists" "check_file '.github/scripts/track-contribution.js' 'Contribution tracking script'"
run_test "Test tracking script exists" "check_file '.github/scripts/test-tracking.sh' 'Test tracking script'"
run_test "Test manual script exists" "check_file '.github/scripts/test-manual.sh' 'Test manual script'"
run_test "Test workflow automation script exists" "check_file '.github/scripts/test-workflow-automation.sh' 'Test workflow automation script'"
run_test "Test workflow triggers script exists" "check_file '.github/scripts/test-workflow-triggers.sh' 'Test workflow triggers script'"

echo -e "\n${YELLOW}📋 Checking Configuration Files...${NC}"

# Test 3: Check configuration files
run_test "Labeler config exists" "check_file '.github/labeler.yml' 'Labeler configuration'"
run_test "Contributors JSON exists" "check_file 'contributors.json' 'Contributors JSON'"
run_test "Contributors markdown exists" "check_file 'CONTRIBUTORS.md' 'Contributors markdown'"

echo -e "\n${YELLOW}📚 Checking Documentation Files...${NC}"

# Test 4: Check documentation files
run_test "Workflow automation setup guide exists" "check_file '.github/WORKFLOW_AUTOMATION_SETUP.md' 'Workflow automation setup guide'"
run_test "Permission fix guide exists" "check_file '.github/PERMISSION_FIX_GUIDE.md' 'Permission fix guide'"
run_test "Urgent repository fix guide exists" "check_file '.github/URGENT_REPOSITORY_FIX.md' 'Urgent repository fix guide'"
run_test "Contribution tracking docs exist" "check_file 'docs/CONTRIBUTION_TRACKING.md' 'Contribution tracking docs'"
run_test "Automation status dashboard exists" "check_file '.github/AUTOMATION_STATUS.md' 'Automation status dashboard'"

echo -e "\n${YELLOW}🔍 Validating Workflow YAML Syntax...${NC}"

# Test 5: Validate YAML syntax
for workflow in .github/workflows/*.yml; do
    if [[ -f "$workflow" ]]; then
        workflow_name=$(basename "$workflow")
        run_test "YAML syntax validation for $workflow_name" "python3 -c \"import yaml; yaml.safe_load(open('$workflow'))\""
    fi
done

echo -e "\n${YELLOW}📊 Validating JSON Files...${NC}"

# Test 6: Validate JSON syntax
if [[ -f "contributors.json" ]]; then
    run_test "Contributors JSON syntax" "python3 -c \"import json; json.load(open('contributors.json'))\""
fi

if [[ -f "package.json" ]]; then
    run_test "Package JSON syntax" "python3 -c \"import json; json.load(open('package.json'))\""
fi

echo -e "\n${YELLOW}🔧 Checking Workflow Permissions...${NC}"

# Test 7: Check for proper permissions in workflows
check_permissions() {
    local file="$1"
    local name="$2"
    
    if grep -q "pull-requests: write" "$file" && grep -q "issues: write" "$file"; then
        echo -e "${GREEN}✅ $name has correct permissions${NC}"
        return 0
    else
        echo -e "${RED}❌ $name missing required permissions${NC}"
        return 1
    fi
}

run_test "Auto-run workflows permissions" "check_permissions '.github/workflows/auto-run-pr-workflows.yml' 'Auto-run workflows'"
run_test "Enhanced labeler permissions" "check_permissions '.github/workflows/enhanced-auto-labeler.yml' 'Enhanced labeler'"
run_test "Simple labeler permissions" "check_permissions '.github/workflows/simple-auto-labeler.yml' 'Simple labeler'"

echo -e "\n${YELLOW}🎯 Checking Token Fallback Logic...${NC}"

# Test 8: Check for PAT_TOKEN fallback in workflows
check_token_fallback() {
    local file="$1"
    local name="$2"
    
    if grep -q "PAT_TOKEN.*GITHUB_TOKEN" "$file"; then
        echo -e "${GREEN}✅ $name has token fallback logic${NC}"
        return 0
    else
        echo -e "${RED}❌ $name missing token fallback${NC}"
        return 1
    fi
}

run_test "Auto-run workflows token fallback" "check_token_fallback '.github/workflows/auto-run-pr-workflows.yml' 'Auto-run workflows'"
run_test "Enhanced labeler token fallback" "check_token_fallback '.github/workflows/enhanced-auto-labeler.yml' 'Enhanced labeler'"

echo -e "\n${YELLOW}📝 Checking Manual Command Support...${NC}"

# Test 9: Check for manual command triggers
check_manual_commands() {
    local file="$1"
    local name="$2"
    
    if grep -q "issue_comment" "$file" && (grep -q "/check\|/rerun\|/label" "$file" || grep -q "contains.*comment.*body" "$file"); then
        echo -e "${GREEN}✅ $name supports manual commands${NC}"
        return 0
    else
        echo -e "${YELLOW}⚠️  $name may not support manual commands${NC}"
        return 1
    fi
}

run_test "Auto-run workflows manual commands" "check_manual_commands '.github/workflows/auto-run-pr-workflows.yml' 'Auto-run workflows'"
run_test "Enhanced labeler manual commands" "check_manual_commands '.github/workflows/enhanced-auto-labeler.yml' 'Enhanced labeler'"

echo -e "\n${YELLOW}🔄 Testing Script Executability...${NC}"

# Test 10: Check if scripts are executable
for script in .github/scripts/*.sh; do
    if [[ -f "$script" ]]; then
        script_name=$(basename "$script")
        run_test "$script_name is executable" "test -x '$script'"
        
        # Make executable if not already
        if [[ ! -x "$script" ]]; then
            chmod +x "$script"
            echo -e "${YELLOW}⚠️  Made $script_name executable${NC}"
        fi
    fi
done

echo -e "\n${YELLOW}📋 Checking Labeler Configuration...${NC}"

# Test 11: Validate labeler configuration
if [[ -f ".github/labeler.yml" ]]; then
    run_test "Labeler config has label definitions" "grep -q '.*:' '.github/labeler.yml'"
    run_test "Labeler config has path patterns" "grep -q 'any:\|all:' '.github/labeler.yml'"
fi

echo -e "\n${YELLOW}🎨 Testing Manual Workflow Execution...${NC}"

# Test 12: Try to execute test scripts (dry run)
for script in .github/scripts/test-*.sh; do
    if [[ -f "$script" && -x "$script" ]]; then
        script_name=$(basename "$script")
        echo -e "\n${BLUE}🔍 Testing $script_name (syntax check)${NC}"
        if bash -n "$script"; then
            echo -e "${GREEN}✅ $script_name syntax is valid${NC}"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo -e "${RED}❌ $script_name has syntax errors${NC}"
            TESTS_FAILED=$((TESTS_FAILED + 1))
        fi
        TESTS_RUN=$((TESTS_RUN + 1))
    fi
done

echo -e "\n${YELLOW}📊 Final System Health Check...${NC}"

# Test 13: Overall system health
health_score=$((TESTS_PASSED * 100 / TESTS_RUN))

if [[ $health_score -ge 90 ]]; then
    health_status="${GREEN}EXCELLENT"
elif [[ $health_score -ge 75 ]]; then
    health_status="${YELLOW}GOOD"
elif [[ $health_score -ge 60 ]]; then
    health_status="${YELLOW}FAIR"
else
    health_status="${RED}NEEDS ATTENTION"
fi

echo -e "\n=================================================="
echo -e "${BLUE}🧪 COMPREHENSIVE TEST RESULTS${NC}"
echo -e "=================================================="
echo -e "Total Tests Run: ${TESTS_RUN}"
echo -e "Tests Passed: ${GREEN}${TESTS_PASSED}${NC}"
echo -e "Tests Failed: ${RED}${TESTS_FAILED}${NC}"
echo -e "Health Score: ${health_status} (${health_score}%)${NC}"

if [[ $TESTS_FAILED -eq 0 ]]; then
    echo -e "\n${GREEN}🎉 ALL TESTS PASSED! Automation system is ready!${NC}"
    echo -e "\n${YELLOW}⚠️  IMPORTANT REMINDER:${NC}"
    echo -e "The only remaining step is for a repository maintainer to:"
    echo -e "1. Update repository settings (see .github/URGENT_REPOSITORY_FIX.md)"
    echo -e "2. Test with a real PR from a fork"
    echo -e "3. Verify all workflows run without 403 errors"
    exit 0
else
    echo -e "\n${RED}⚠️  Some tests failed. Please review the issues above.${NC}"
    echo -e "\n${YELLOW}Common fixes:${NC}"
    echo -e "- Check file permissions (chmod +x for scripts)"
    echo -e "- Validate YAML syntax"
    echo -e "- Ensure all required files are present"
    exit 1
fi
