#!/usr/bin/env node

/**
 * Pre-commit hook script
 * This script runs formatting and linting checks before each commit
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logError(message) {
  log(`❌ ${message}`, colors.red);
}

function logSuccess(message) {
  log(`✅ ${message}`, colors.green);
}

function logInfo(message) {
  log(`ℹ️  ${message}`, colors.blue);
}

function logWarning(message) {
  log(`⚠️  ${message}`, colors.yellow);
}

function getStagedFiles() {
  try {
    const stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf-8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);
    return stagedFiles;
  } catch (error) {
    return [];
  }
}

function hasFrontendChanges(files) {
  return files.some(file => file.startsWith('frontend/'));
}

function hasBackendChanges(files) {
  return files.some(file => file.startsWith('backend/'));
}

function runCommand(command, cwd = process.cwd()) {
  try {
    execSync(command, { 
      cwd, 
      stdio: 'pipe',
      encoding: 'utf-8'
    });
    return { success: true, output: '' };
  } catch (error) {
    return { 
      success: false, 
      output: error.stdout || error.stderr || error.message 
    };
  }
}

function checkFrontendQuality() {
  logInfo('Checking frontend code quality...');
  
  const frontendPath = path.join(process.cwd(), 'frontend');
  
  if (!fs.existsSync(frontendPath)) {
    logWarning('Frontend directory not found, skipping frontend checks');
    return true;
  }
  
  // Check if node_modules exists
  if (!fs.existsSync(path.join(frontendPath, 'node_modules'))) {
    logInfo('Installing frontend dependencies...');
    const installResult = runCommand('npm install', frontendPath);
    if (!installResult.success) {
      logError('Failed to install frontend dependencies');
      console.log(installResult.output);
      return false;
    }
  }
  
  // Check Prettier formatting
  log('📝 Checking Prettier formatting...', colors.cyan);
  const prettierResult = runCommand('npx prettier --check .', frontendPath);
  if (!prettierResult.success) {
    logError('Frontend code is not formatted correctly');
    console.log(prettierResult.output);
    logInfo('Run "cd frontend && npx prettier --write ." to fix formatting');
    return false;
  }
  
  // Check ESLint
  log('🔍 Running ESLint...', colors.cyan);
  const eslintResult = runCommand('npm run lint', frontendPath);
  if (!eslintResult.success) {
    logError('ESLint errors found in frontend');
    console.log(eslintResult.output);
    logInfo('Run "cd frontend && npm run lint -- --fix" to fix some issues automatically');
    return false;
  }
  
  // Check TypeScript
  log('🔍 Checking TypeScript...', colors.cyan);
  const tscResult = runCommand('npx tsc --noEmit', frontendPath);
  if (!tscResult.success) {
    logError('TypeScript errors found in frontend');
    console.log(tscResult.output);
    return false;
  }
  
  logSuccess('Frontend quality checks passed!');
  return true;
}

function checkBackendQuality() {
  logInfo('Checking backend code quality...');
  
  const backendPath = path.join(process.cwd(), 'backend');
  
  if (!fs.existsSync(backendPath)) {
    logWarning('Backend directory not found, skipping backend checks');
    return true;
  }
  
  // Check if node_modules exists
  if (!fs.existsSync(path.join(backendPath, 'node_modules'))) {
    logInfo('Installing backend dependencies...');
    const installResult = runCommand('npm install', backendPath);
    if (!installResult.success) {
      logError('Failed to install backend dependencies');
      console.log(installResult.output);
      return false;
    }
  }
  
  // Check Prettier formatting
  log('📝 Checking Prettier formatting...', colors.cyan);
  const prettierResult = runCommand('npm run format:check', backendPath);
  if (!prettierResult.success) {
    logError('Backend code is not formatted correctly');
    console.log(prettierResult.output);
    logInfo('Run "cd backend && npm run format" to fix formatting');
    return false;
  }
  
  logSuccess('Backend quality checks passed!');
  return true;
}

function main() {
  log(`\n${colors.bold}🚀 Running pre-commit quality checks...${colors.reset}\n`);
  
  const stagedFiles = getStagedFiles();
  
  if (stagedFiles.length === 0) {
    logWarning('No staged files found');
    return;
  }
  
  logInfo(`Found ${stagedFiles.length} staged file(s):`);
  stagedFiles.forEach(file => log(`  - ${file}`, colors.gray));
  console.log();
  
  const hasFrontend = hasFrontendChanges(stagedFiles);
  const hasBackend = hasBackendChanges(stagedFiles);
  
  let allChecksPassed = true;
  
  if (hasFrontend) {
    allChecksPassed = checkFrontendQuality() && allChecksPassed;
  }
  
  if (hasBackend) {
    allChecksPassed = checkBackendQuality() && allChecksPassed;
  }
  
  if (!hasFrontend && !hasBackend) {
    logInfo('No frontend or backend changes detected, skipping quality checks');
    return;
  }
  
  console.log();
  
  if (allChecksPassed) {
    logSuccess('All quality checks passed! Proceeding with commit...');
  } else {
    logError('Quality checks failed! Please fix the issues above before committing.');
    process.exit(1);
  }
}

// Only run if this script is executed directly
if (require.main === module) {
  main();
}

module.exports = {
  getStagedFiles,
  hasFrontendChanges,
  hasBackendChanges,
  checkFrontendQuality,
  checkBackendQuality
};
