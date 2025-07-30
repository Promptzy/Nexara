const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const {
  validateSignup,
  validateLogin,
  sanitizeEmail,
} = require('../middleware/validation');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/signup', sanitizeEmail, validateSignup, authController.signup);
router.post('/login', sanitizeEmail, validateLogin, authController.login);
router.get('/profile', authMiddleware, authController.getProfile);

module.exports = router;
