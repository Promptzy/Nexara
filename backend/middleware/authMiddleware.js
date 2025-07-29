const { verifyToken, extractTokenFromHeader } = require('../utils/jwt');
const authService = require('../services/auth.service');

/**
 * Authentication middleware to protect routes
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const authMiddleware = async (req, res, next) => {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;
    const token = extractTokenFromHeader(authHeader);

    if (!token) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'NO_TOKEN',
          message: 'Access token is required. Please provide a valid Bearer token.',
        },
      });
    }

    // Verify the token
    let decoded;
    try {
      decoded = verifyToken(token);
    } catch (tokenError) {
      let errorCode = 'INVALID_TOKEN';
      let errorMessage = 'Invalid or malformed token';

      if (tokenError.message === 'Token has expired') {
        errorCode = 'TOKEN_EXPIRED';
        errorMessage = 'Token has expired. Please login again.';
      } else if (tokenError.message === 'Invalid token') {
        errorCode = 'INVALID_TOKEN';
        errorMessage = 'Invalid or malformed token';
      }

      return res.status(401).json({
        success: false,
        error: {
          code: errorCode,
          message: errorMessage,
        },
      });
    }

    // Verify user still exists and is active
    const user = await authService.findUserById(decoded.sub);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'USER_NOT_FOUND',
          message: 'User account not found or has been deactivated',
        },
      });
    }

    // Attach user information to request object
    req.user = {
      sub: user.id,
      email: user.email,
      username: user.username,
      iat: decoded.iat,
      exp: decoded.exp,
    };

    next();
  } catch (error) {
    console.error('Auth middleware error:', error);

    return res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Authentication failed. Please try again later.',
      },
    });
  }
};



module.exports = {
  authMiddleware,
};