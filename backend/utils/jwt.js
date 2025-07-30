const jwt = require('jsonwebtoken');

const generateToken = payload => {
  try {
    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRES_IN || '15m';

    if (!secret) {
      throw new Error('JWT_SECRET environment variable is required');
    }

    return jwt.sign(payload, secret, { expiresIn });
  } catch (error) {
    throw new Error(`Token generation failed: ${error.message}`);
  }
};

const verifyToken = token => {
  try {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET environment variable is required');
    }

    return jwt.verify(token, secret);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      throw new Error('Token has expired');
    } else if (error.name === 'JsonWebTokenError') {
      throw new Error('Invalid token');
    } else if (error.name === 'NotBeforeError') {
      throw new Error('Token not active');
    } else {
      throw new Error(`Token verification failed: ${error.message}`);
    }
  }
};

const extractTokenFromHeader = authHeader => {
  if (!authHeader) {
    return null;
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return null;
  }

  return parts[1];
};

module.exports = {
  generateToken,
  verifyToken,
  extractTokenFromHeader,
};
