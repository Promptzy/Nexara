/**
 * Environment configuration validation
 */

const requiredEnvVars = [
  'JWT_SECRET',
  'DATABASE_URL',
];

const optionalEnvVars = {
  PORT: '5000',
  NODE_ENV: 'development',
  JWT_EXPIRES_IN: '15m',
  JWT_REFRESH_EXPIRES_IN: '7d',
  BCRYPT_SALT_ROUNDS: '12',
};

/**
 * Validate required environment variables
 * @throws {Error} If required environment variables are missing
 */
const validateEnv = () => {
  const missingVars = [];

  // Check required variables
  requiredEnvVars.forEach(varName => {
    if (!process.env[varName]) {
      missingVars.push(varName);
    }
  });

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}\n` +
      'Please check your .env file and ensure all required variables are set.'
    );
  }

  // Set default values for optional variables
  Object.entries(optionalEnvVars).forEach(([varName, defaultValue]) => {
    if (!process.env[varName]) {
      process.env[varName] = defaultValue;
      console.log(`ℹ️  Using default value for ${varName}: ${defaultValue}`);
    }
  });

  // Validate JWT_SECRET strength
  if (process.env.JWT_SECRET.length < 32) {
    console.warn('⚠️  JWT_SECRET should be at least 32 characters long for security');
  }

  // Validate BCRYPT_SALT_ROUNDS
  const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);
  if (isNaN(saltRounds) || saltRounds < 10) {
    console.warn('⚠️  BCRYPT_SALT_ROUNDS should be at least 10 for security');
    process.env.BCRYPT_SALT_ROUNDS = '12';
  }

  console.log('✅ Environment configuration validated successfully');
};

/**
 * Get environment configuration object
 * @returns {Object} Environment configuration
 */
const getConfig = () => {
  return {
    port: parseInt(process.env.PORT) || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',
    database: {
      url: process.env.DATABASE_URL,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN || '15m',
      refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    },
    bcrypt: {
      saltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 12,
    },
    cors: {
      origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
      enabled: process.env.ENABLE_CORS !== 'false',
    },
  };
};

/**
 * Print configuration summary (without sensitive data)
 */
const printConfigSummary = () => {
  const config = getConfig();
  
  console.log('\n📋 Configuration Summary:');
  console.log(`   Port: ${config.port}`);
  console.log(`   Environment: ${config.nodeEnv}`);
  console.log(`   JWT Expires In: ${config.jwt.expiresIn}`);
  console.log(`   Bcrypt Salt Rounds: ${config.bcrypt.saltRounds}`);
  console.log(`   CORS Origin: ${config.cors.origin}`);
  console.log(`   Database: ${config.database.url ? 'Configured' : 'Not configured'}`);
  console.log(`   JWT Secret: ${config.jwt.secret ? 'Configured' : 'Not configured'}\n`);
};

module.exports = {
  validateEnv,
  getConfig,
  printConfigSummary,
};