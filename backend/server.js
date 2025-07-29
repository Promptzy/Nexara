const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import configuration
const { validateEnv, printConfigSummary } = require('./config/env');
const { testConnection, disconnectDatabase } = require('./config/database');

// Validate environment variables
try {
  validateEnv();
  printConfigSummary();
} catch (error) {
  console.error('❌ Environment validation failed:', error.message);
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Zenjira Backend Server is running!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// Import routes
const authRoutes = require('./routes/auth.routes');

// API Routes
app.get('/api/test', (req, res) => {
  res.json({
    message: 'Zenjira API is working!',
    endpoints: [
      'GET /health - Health check',
      'GET /api/test - API test endpoint',
      'POST /api/auth/signup - User registration',
      'POST /api/auth/login - User login',
      'GET /api/auth/profile - Get user profile (protected)',
      'GET /api/auth/verify - Verify token (protected)',
    ],
  });
});

// Authentication routes
app.use('/api/auth', authRoutes);

// Import error handling middleware
const {
  globalErrorHandler,
  handleNotFound,
} = require('./middleware/errorHandler');

// 404 handler for undefined routes
app.use('*', handleNotFound);

// Global error handling middleware
app.use(globalErrorHandler);

// Test database connection
testConnection();

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Zenjira Backend Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔧 API test: http://localhost:${PORT}/api/test`);
  console.log(`📖 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('HTTP server closed');
    disconnectDatabase().then(() => {
      process.exit(0);
    });
  });
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('HTTP server closed');
    disconnectDatabase().then(() => {
      process.exit(0);
    });
  });
});

module.exports = app;
