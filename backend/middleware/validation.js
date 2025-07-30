const Joi = require('joi');

const signupSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email is required',
    }),

  password: Joi.string()
    .min(8)
    .pattern(
      new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*(),.?":{}|<>])')
    )
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters long',
      'string.pattern.base':
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
      'any.required': 'Password is required',
    }),

  username: Joi.string().alphanum().min(3).max(30).optional().messages({
    'string.alphanum': 'Username must contain only letters and numbers',
    'string.min': 'Username must be at least 3 characters long',
    'string.max': 'Username must not exceed 30 characters',
  }),
});

const loginSchema = Joi.object({
  identifier: Joi.string().min(3).optional().messages({
    'string.min': 'Email or username must be at least 3 characters long',
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .optional()
    .messages({
      'string.email': 'Please provide a valid email address',
    }),

  username: Joi.string().alphanum().min(3).optional().messages({
    'string.alphanum': 'Username must contain only letters and numbers',
    'string.min': 'Username must be at least 3 characters long',
  }),

  password: Joi.string().required().messages({
    'any.required': 'Password is required',
  }),
})
  .or('identifier', 'email', 'username')
  .messages({
    'object.missing': 'Either identifier, email, or username is required',
  });

const validate = schema => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const validationErrors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message,
      }));

      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid input data',
          details: validationErrors,
        },
      });
    }

    req.body = value;
    next();
  };
};

const validateSignup = validate(signupSchema);
const validateLogin = validate(loginSchema);

const sanitizeEmail = (req, res, next) => {
  if (req.body.email) {
    req.body.email = req.body.email.toLowerCase().trim();
  }
  next();
};

module.exports = {
  validateSignup,
  validateLogin,
  sanitizeEmail,
};
