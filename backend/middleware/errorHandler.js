/**
 * Custom error class for application errors
 */
class AppError extends Error {
  constructor(message, statusCode, code = null) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Global error handling middleware
 * @param {Error} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const globalErrorHandler = (err, req, res, next) => {
  // Set default error values
  let error = { ...err };
  error.message = err.message;

  // Log error for debugging
  console.error('Error:', {
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
  });

  // Prisma errors
  if (err.code === 'P2002') { // Unique constraint violation
    const message = 'Duplicate field value entered';
    error = new AppError(message, 409, 'DUPLICATE_FIELD');
  }

  if (err.code === 'P2025') { // Record not found
    const message = 'Resource not found';
    error = new AppError(message, 404, 'RESOURCE_NOT_FOUND');
  }

  if (err.code === 'P2003') { // Foreign key constraint violation
    const message = 'Referenced resource not found';
    error = new AppError(message, 400, 'FOREIGN_KEY_VIOLATION');
  }

  if (err.code === 'P2011') { // Null constraint violation
    const message = 'Required field is missing';
    error = new AppError(message, 400, 'REQUIRED_FIELD_MISSING');
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid token';
    error = new AppError(message, 401, 'INVALID_TOKEN');
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Token expired';
    error = new AppError(message, 401, 'TOKEN_EXPIRED');
  }

  // Send error response
  sendErrorResponse(error, req, res);
};

/**
 * Send error response based on environment
 * @param {AppError} err - Application error
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const sendErrorResponse = (err, req, res) => {
  const statusCode = err.statusCode || 500;
  const code = err.code || 'INTERNAL_ERROR';
  
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(statusCode).json({
      success: false,
      error: {
        code,
        message: err.message,
      },
    });
  } else {
    // Programming or other unknown error: don't leak error details
    console.error('ERROR:', err);

    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Something went wrong on the server',
      },
    });
  }
};

/**
 * Handle 404 errors for undefined routes
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const handleNotFound = (req, res, next) => {
  const err = new AppError(
    `The route ${req.originalUrl} does not exist on this server`,
    404,
    'ROUTE_NOT_FOUND'
  );
  next(err);
};

module.exports = {
  AppError,
  globalErrorHandler,
  handleNotFound,
};