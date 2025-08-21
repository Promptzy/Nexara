const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issue.controller');

// Project-specific issues
router.get('/projects/:id/issues', issueController.listIssues);
router.post('/projects/:id/issues', issueController.createIssue);

// Single issue
router.get('/issues/:id', issueController.getIssue);
router.put('/issues/:id', issueController.updateIssue);
router.patch('/issues/:id/status', issueController.updateIssueStatus);

// Comments on issues
router.post('/issues/:id/comments', issueController.addComment);
router.get('/issues/:id/comments', issueController.listComments);

module.exports = router;
