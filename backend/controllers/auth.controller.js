const authService = require('../services/auth.service');
const { hashPassword, comparePassword, validatePasswordStrength } = require('../utils/password');
const { generateToken } = require('../utils/jwt');

/**
 * User signup controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Email and password are required',
        },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'INVALID_EMAIL',
          message: 'Please provide a valid email address',
        },
      });
    }

    // Validate password strength
    const passwordValidation = validatePasswordStrength(password);
    if (!passwordValidation.isValid) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'WEAK_PASSWORD',
          message: 'Password does not meet security requirements',
          details: passwordValidation.errors,
        },
      });
    }

    // Check if username already exists (if provided)
    if (username) {
      const existingUserByUsername = await authService.findUserByUsername(username.trim());
      if (existingUserByUsername) {
        return res.status(409).json({
          success: false,
          error: {
            code: 'USERNAME_EXISTS',
            message: 'This username is already taken',
          },
        });
      }
    }

    // Hash the password
    const password_hash = await hashPassword(password);

    // Create user in database
    const userData = {
      email: email.toLowerCase().trim(),
      password_hash,
      username: username?.trim() || null,
    };

    const newUser = await authService.createUser(userData);

    // Return success response (without sensitive data)
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: {
          id: newUser.id,
          email: newUser.email,
          username: newUser.username,
          created_at: newUser.created_at,
        },
      },
    });
  } catch (error) {
    console.error('Signup error:', error);

    // Handle specific errors
    if (error.message === 'Email already exists') {
      return res.status(409).json({
        success: false,
        error: {
          code: 'EMAIL_EXISTS',
          message: 'An account with this email already exists',
        },
      });
    }

    if (error.message.includes('Unique constraint failed on the fields: (`username`)')) {
      return res.status(409).json({
        success: false,
        error: {
          code: 'USERNAME_EXISTS',
          message: 'This username is already taken',
        },
      });
    }

    // Generic server error
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Registration failed. Please try again later.',
      },
    });
  }
};

/**
 * User login controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const login = async (req, res) => {
  try {
    const { identifier, password, email, username } = req.body;

    // Support both old format (email/username separate) and new format (identifier)
    const loginIdentifier = identifier || email || username;

    // Validate required fields
    if (!loginIdentifier || !password) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Email/username and password are required',
        },
      });
    }

    // Find user by email or username
    const user = await authService.findUserByEmailOrUsername(loginIdentifier);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'INVALID_CREDENTIALS',
          message: 'Invalid credentials',
        },
      });
    }

    // Compare password
    const isPasswordValid = await comparePassword(password, user.passwordHash);
    
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'INVALID_CREDENTIALS',
          message: 'Invalid credentials',
        },
      });
    }

    // Generate JWT token
    const tokenPayload = {
      sub: user.id,
      email: user.email,
      username: user.username,
    };

    const token = generateToken(tokenPayload);

    // Return success response with token
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        token,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          createdAt: user.createdAt,
        },
      },
    });
  } catch (error) {
    console.error('Login error:', error);

    // Generic server error
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Login failed. Please try again later.',
      },
    });
  }
};

/**
 * Get authenticated user profile
 * @param {Object} req - Express request object (with user from auth middleware)
 * @param {Object} res - Express response object
 */
const getProfile = async (req, res) => {
  try {
    // User data is attached by auth middleware
    const userId = req.user.sub;

    // Fetch fresh user data from database
    const user = await authService.findUserById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: {
          code: 'USER_NOT_FOUND',
          message: 'User not found',
        },
      });
    }

    // Return user profile (without sensitive data)
    res.status(200).json({
      success: true,
      message: 'Profile retrieved successfully',
      data: {
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          isActive: user.isActive,
        },
      },
    });
  } catch (error) {
    console.error('Get profile error:', error);

    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to retrieve profile. Please try again later.',
      },
    });
  }
};

module.exports = {
  signup,
  login,
  getProfile,
};