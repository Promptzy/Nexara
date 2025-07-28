#!/usr/bin/env node

/**
 * Setup script for pre-commit hooks
 * This script installs the pre-commit hook and sets up the development environment
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI color codes
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
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

function isGitRepository() {
  try {
    execSync('git rev-parse --git-dir', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function installPreCommitHook() {
  const gitHooksDir = path.join(process.cwd(), '.git', 'hooks');
  const preCommitHookPath = path.join(gitHooksDir, 'pre-commit');
  const preCommitScriptPath = path.join(process.cwd(), 'scripts', 'pre-commit.js');
  
  // Ensure the hooks directory exists
  if (!fs.existsSync(gitHooksDir)) {
    fs.mkdirSync(gitHooksDir, { recursive: true });
  }
  
  // Create the pre-commit hook
  const hookContent = `#!/bin/sh
#
# Pre-commit hook for Zenjira
# This hook runs code quality checks before each commit
#

# Run the Node.js pre-commit script
exec node "${preCommitScriptPath}"
`;
  
  fs.writeFileSync(preCommitHookPath, hookContent);
  
  // Make the hook executable (Unix systems)
  if (process.platform !== 'win32') {
    fs.chmodSync(preCommitHookPath, 0o755);
  }
  
  return preCommitHookPath;
}

function setupDependencies() {
  logInfo('Setting up dependencies...');
  
  const frontendPath = path.join(process.cwd(), 'frontend');
  const backendPath = path.join(process.cwd(), 'backend');
  
  // Install frontend dependencies
  if (fs.existsSync(frontendPath) && fs.existsSync(path.join(frontendPath, 'package.json'))) {
    logInfo('Installing frontend dependencies...');
    try {
      execSync('npm install', { cwd: frontendPath, stdio: 'inherit' });
      logSuccess('Frontend dependencies installed');
    } catch (error) {
      logError('Failed to install frontend dependencies');
      return false;
    }
  }
  
  // Install backend dependencies
  if (fs.existsSync(backendPath) && fs.existsSync(path.join(backendPath, 'package.json'))) {
    logInfo('Installing backend dependencies...');
    try {
      execSync('npm install', { cwd: backendPath, stdio: 'inherit' });
      logSuccess('Backend dependencies installed');
    } catch (error) {
      logError('Failed to install backend dependencies');
      return false;
    }
  }
  
  return true;
}

function addScriptsToPackageJson() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    // Create a root package.json if it doesn't exist
    const packageJson = {
      name: "zenjira",
      version: "1.0.0",
      description: "AI-powered Jira automation platform",
      scripts: {
        "setup": "node scripts/setup.js",
        "pre-commit": "node scripts/pre-commit.js",
        "format": "npm run format:frontend && npm run format:backend",
        "format:frontend": "cd frontend && npx prettier --write .",
        "format:backend": "cd backend && npm run format",
        "lint": "npm run lint:frontend",
        "lint:frontend": "cd frontend && npm run lint",
        "test": "npm run test:frontend",
        "test:frontend": "cd frontend && npm run test:run"
      },
      keywords: ["jira", "automation", "ai"],
      author: "Zenjira Team",
      license: "MIT"
    };
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    logSuccess('Created root package.json with helpful scripts');
  } else {
    // Update existing package.json
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    
    packageJson.scripts = packageJson.scripts || {};
    
    const newScripts = {
      "setup": "node scripts/setup.js",
      "pre-commit": "node scripts/pre-commit.js",
      "format": "npm run format:frontend && npm run format:backend",
      "format:frontend": "cd frontend && npx prettier --write .",
      "format:backend": "cd backend && npm run format",
      "lint": "npm run lint:frontend",
      "lint:frontend": "cd frontend && npm run lint",
      "test": "npm run test:frontend",
      "test:frontend": "cd frontend && npm run test:run"
    };
    
    Object.assign(packageJson.scripts, newScripts);
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    logSuccess('Updated root package.json with helpful scripts');
  }
}

function createEditorConfig() {
  const editorConfigPath = path.join(process.cwd(), '.editorconfig');
  
  if (!fs.existsSync(editorConfigPath)) {
    const editorConfig = `# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.{yml,yaml}]
indent_size = 2

[*.json]
indent_size = 2

[*.js]
indent_size = 2

[*.ts]
indent_size = 2

[*.tsx]
indent_size = 2

[*.jsx]
indent_size = 2
`;
    
    fs.writeFileSync(editorConfigPath, editorConfig);
    logSuccess('Created .editorconfig for consistent editor settings');
  }
}

function main() {
  log(`\n${colors.bold}🚀 Setting up Zenjira development environment...${colors.reset}\n`);
  
  // Check if we're in a git repository
  if (!isGitRepository()) {
    logError('This is not a Git repository. Please run this script from the root of your Git repository.');
    process.exit(1);
  }
  
  try {
    // Install pre-commit hook
    logInfo('Installing pre-commit hook...');
    const hookPath = installPreCommitHook();
    logSuccess(`Pre-commit hook installed at: ${hookPath}`);
    
    // Setup dependencies
    const depsSuccess = setupDependencies();
    if (!depsSuccess) {
      logWarning('Some dependencies failed to install. You may need to install them manually.');
    }
    
    // Add helpful scripts to root package.json
    addScriptsToPackageJson();
    
    // Create .editorconfig
    createEditorConfig();
    
    log(`\n${colors.bold}🎉 Setup complete!${colors.reset}\n`);
    
    logInfo('Available commands:');
    log('  npm run format          - Format all code (frontend + backend)', colors.blue);
    log('  npm run format:frontend - Format frontend code only', colors.blue);
    log('  npm run format:backend  - Format backend code only', colors.blue);
    log('  npm run lint            - Run linting on frontend', colors.blue);
    log('  npm run test            - Run tests', colors.blue);
    log('  npm run pre-commit      - Run pre-commit checks manually', colors.blue);
    
    log('\n📝 The pre-commit hook is now active and will run automatically on each commit.');
    log('To test it manually, run: npm run pre-commit\n');
    
  } catch (error) {
    logError(`Setup failed: ${error.message}`);
    process.exit(1);
  }
}

// Only run if this script is executed directly
if (require.main === module) {
  main();
}
