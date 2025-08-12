const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { validateEnv } = require('./config/env');
const { testConnection, disconnectDatabase } = require('./config/database');

try {
  validateEnv();
} catch (error) {
  console.error('❌ Environment validation failed:', error.message);
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Zenjira Backend Server is running!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

const leaderboardRoutes = require('./routes/leaderboard.routes');
app.use('/api/leaderboard', leaderboardRoutes);

const {
  globalErrorHandler,
  handleNotFound,
} = require('./middleware/errorHandler');

app.use('*', handleNotFound);
app.use(globalErrorHandler);
testConnection();

const server = app.listen(PORT, () => {
  console.log(`🚀 Zenjira Backend Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    disconnectDatabase().then(() => process.exit(0));
  });
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    disconnectDatabase().then(() => process.exit(0));
  });
});

module.exports = app;
