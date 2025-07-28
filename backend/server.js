const express = require('express');
const cors = require('cors');
require('dotenv').config();

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

// API Routes
app.get('/api/test', (req, res) => {
  res.json({
    message: 'Zenjira API is working!',
    endpoints: [
      'GET /health - Health check',
      'GET /api/test - API test endpoint',
      'POST /api/jira/webhook - Jira webhook handler (coming soon)',
      'GET /api/automation/workflows - List automation workflows (coming soon)',
    ],
  });
});

// Jira API routes (placeholder)
app.get('/api/jira/projects', (req, res) => {
  res.json({
    message: 'Jira integration coming soon!',
    projects: [],
  });
});

// Automation routes (placeholder)
app.get('/api/automation/workflows', (req, res) => {
  res.json({
    message: 'Automation workflows coming soon!',
    workflows: [],
  });
});

// AI routes (placeholder)
app.post('/api/ai/summarize', (req, res) => {
  res.json({
    message: 'AI summarization coming soon!',
    summary: 'This feature will be implemented with GPT-4 integration',
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The route ${req.originalUrl} does not exist on this server`,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong on the server',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Zenjira Backend Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔧 API test: http://localhost:${PORT}/api/test`);
  console.log(`📖 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
