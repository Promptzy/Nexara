// const express = require('express');
// const router = express.Router();
// const issueController = require('../controllers/issue.controller');

// // Project-specific issues
// router.get('/projects/:id/issues', issueController.listIssues);
// router.post('/projects/:id/issues', issueController.createIssue);

// // Single issue
// router.get('/issues/:id', issueController.getIssue);
// router.put('/issues/:id', issueController.updateIssue);
// router.patch('/issues/:id/status', issueController.updateIssueStatus);

// // Comments on issues
// router.post('/issues/:id/comments', issueController.addComment);
// router.get('/issues/:id/comments', issueController.listComments);

// module.exports = router;

const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issue.controller');
const { authMiddleware } = require('../middleware/authMiddleware');

// Project-specific issues
router.get('/projects/:id/issues', authMiddleware, issueController.listIssues);
router.post(
  '/projects/:id/issues',
  authMiddleware,
  issueController.createIssue
);

// Single issue
router.get('/issues/:id', authMiddleware, issueController.getIssue);
router.put('/issues/:id', authMiddleware, issueController.updateIssue);
router.patch(
  '/issues/:id/status',
  authMiddleware,
  issueController.updateIssueStatus
);

// Comments on issues
router.post('/issues/:id/comments', authMiddleware, issueController.addComment);
router.get(
  '/issues/:id/comments',
  authMiddleware,
  issueController.listComments
);

module.exports = router;
