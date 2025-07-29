const express = require('express');
const router = express.Router();

// Import controllers
const authController = require('../controllers/auth.controller');

// Import middleware
const { validateSignup, validateLogin, sanitizeEmail } = require('../middleware/validation');
const { authMiddleware } = require('../middleware/authMiddleware');

/**
 * @route   POST /api/auth/signup
 * @desc    Register a new user
 * @access  Public
 */
router.post('/signup', sanitizeEmail, validateSignup, authController.signup);

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user and return JWT token
 * @access  Public
 */
router.post('/login', sanitizeEmail, validateLogin, authController.login);

/**
 * @route   GET /api/auth/profile
 * @desc    Get current user profile
 * @access  Private (requires valid JWT token)
 */
router.get('/profile', authMiddleware, authController.getProfile);

/**
 * @route   GET /api/auth/verify
 * @desc    Verify if the current token is valid
 * @access  Private (requires valid JWT token)
 */
router.get('/verify', authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Token is valid',
    data: {
      user: {
        id: req.user.sub,
        email: req.user.email,
        username: req.user.username,
      },
      token_info: {
        issued_at: new Date(req.user.iat * 1000).toISOString(),
        expires_at: new Date(req.user.exp * 1000).toISOString(),
      },
    },
  });
});

module.exports = router;