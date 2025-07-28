# Code Quality and Formatting

This document explains the automated code quality checks and formatting in the Zenjira project.

## Overview

The project uses GitHub Actions to automatically run formatting and linting checks when code is committed or when pull requests are created. This ensures consistent code quality without requiring local setup.

## Available Commands

### Root Level Commands

```bash
# Format all code (frontend + backend)
npm run format

# Format only frontend
npm run format:frontend

# Format only backend
npm run format:backend

# Run linting
npm run lint

# Run tests
npm run test
```

### Frontend Commands

```bash
cd frontend

# Format code
npm run format

# Check formatting
npm run format:check

# Run linting
npm run lint

# Fix linting issues automatically
npm run lint -- --fix

# Run tests
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests in watch mode
npm run test
```

### Backend Commands

```bash
cd backend

# Format code
npm run format

# Check formatting
npm run format:check
```

## GitHub Actions Integration

The repository uses GitHub Actions to automatically run formatting and linting checks when code is committed or pull requests are created.

### When Checks Run

The `code-quality.yml` workflow runs on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

### What Gets Checked

The workflow automatically detects which files have changed and runs appropriate checks:

#### Frontend checks (when frontend files change):
- **Prettier formatting** - Ensures consistent code formatting
- **ESLint** - Catches code quality issues and enforces coding standards
- **TypeScript compilation** - Validates TypeScript code
- **Unit tests** - Runs the test suite

#### Backend checks (when backend files change):
- **Prettier formatting** - Ensures consistent code formatting

### Workflow Features

- **Smart detection**: Only runs checks for files that actually changed
- **Detailed feedback**: Shows exactly what needs to be fixed
- **PR comments**: Adds helpful comments to pull requests with check results
- **Clear instructions**: Provides commands to fix any issues found

### Example Output

When checks pass:
```
✅ Frontend: All quality checks passed!
✅ Backend: All quality checks passed!
```

When checks fail:
```
❌ Frontend: Quality checks failed. Please fix the issues above.

### 🔧 How to fix:
Frontend formatting:
```bash
cd frontend
npx prettier --write .
npm run lint -- --fix
```
```

## Formatting Configuration

### Frontend (.prettierrc)

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

### Backend (.prettierrc)

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

### ESLint (Frontend)

Uses Next.js recommended configuration with TypeScript support.

## Editor Integration

### VS Code

Install these extensions for the best experience:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### Settings

Add to your VS Code settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.workingDirectories": ["frontend"],
  "prettier.requireConfig": true
}
```

## Troubleshooting

### Common Issues

#### Dependencies not installed

```bash
# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd backend && npm install
```

#### Formatting conflicts

```bash
# Auto-fix formatting issues
npm run format

# Check what needs to be fixed
cd frontend && npm run format:check
cd backend && npm run format:check
```

#### GitHub Actions failing

1. Check the Actions tab in your GitHub repository
2. Look at the detailed logs to see what failed
3. Fix the issues locally using the provided commands
4. Commit and push the fixes

## Best Practices

1. **Run checks locally**: Use `npm run format` and `npm run lint` before pushing
2. **Fix issues incrementally**: Don't wait until push time to run checks
3. **Use editor integration**: Set up your editor to format and lint on save
4. **Keep dependencies updated**: Regularly update Prettier, ESLint, and other tools
5. **Test before pushing**: Ensure all tests pass locally before pushing

## Contributing

When contributing to this project:

1. Install dependencies: `npm install` in both frontend and backend directories
2. Follow the established formatting and linting rules
3. Use `npm run format` to format your code before committing
4. Use `npm run lint` to check for linting issues
5. Ensure all tests pass with `npm run test`
6. The GitHub Actions workflow will automatically check your code when you push

The automated checks will help ensure code quality and consistency across the project.
