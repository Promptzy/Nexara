const requiredEnvVars = ['JWT_SECRET', 'DATABASE_URL'];

const optionalEnvVars = {
  PORT: '5000',
  NODE_ENV: 'production',
  JWT_EXPIRES_IN: '8h',
  BCRYPT_SALT_ROUNDS: '12',
};
const validateEnv = () => {
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }

  Object.entries(optionalEnvVars).forEach(([varName, defaultValue]) => {
    if (!process.env[varName]) {
      process.env[varName] = defaultValue;
    }
  });

  if (process.env.JWT_SECRET.length < 32) {
    console.warn('⚠️  JWT_SECRET should be at least 32 characters long for security');
  }
};

module.exports = {
  validateEnv,
};