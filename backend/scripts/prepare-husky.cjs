// Skip in production or outside git; avoid failures when husky isn't installed in prod
if (process.env.NODE_ENV === 'production') process.exit(0);

const fs = require('fs');
const { execSync } = require('child_process');

if (!fs.existsSync('.git')) process.exit(0);

try {
  execSync('npx husky', { stdio: 'inherit', shell: true });
} catch (error) {
  console.warn('Warning: Failed to initialize husky hooks:', error.message);
}
