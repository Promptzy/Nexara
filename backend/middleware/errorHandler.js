class AppError extends Error {
  constructor(message, statusCode, code = null) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

const globalErrorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  console.error('Error:', {
    message: err.message,
    url: req.originalUrl,
    method: req.method,
  });

  if (err.code === 'P2002') {
    error = new AppError(
      'Duplicate field value entered',
      409,
      'DUPLICATE_FIELD'
    );
  }

  if (err.code === 'P2025') {
    error = new AppError('Resource not found', 404, 'RESOURCE_NOT_FOUND');
  }

  if (err.name === 'JsonWebTokenError') {
    error = new AppError('Invalid token', 401, 'INVALID_TOKEN');
  }

  if (err.name === 'TokenExpiredError') {
    error = new AppError('Token expired', 401, 'TOKEN_EXPIRED');
  }

  sendErrorResponse(error, req, res);
};

const sendErrorResponse = (err, req, res) => {
  const statusCode = err.statusCode || 500;
  const code = err.code || 'INTERNAL_ERROR';

  if (err.isOperational) {
    res.status(statusCode).json({
      success: false,
      error: { code, message: err.message },
    });
  } else {
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
