# Zenjira Backend

## Code Formatting

This project uses Prettier for consistent code formatting across the backend codebase.

### Configuration

- **Configuration file**: `.prettierrc`
- **Ignore file**: `.prettierignore`
- **Rules**: Single quotes, semicolons, trailing commas, 2-space indentation

### Scripts

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

### From Root Directory

```bash
# Format backend files from project root
npm run format:backend

# Check backend formatting from project root
npm run format:check:backend
```

### Supported File Types

- JavaScript (`.js`)
- TypeScript (`.ts`)
- JSON (`.json`)
- Markdown (`.md`)

The formatter automatically excludes `node_modules`, build directories, and environment files.
