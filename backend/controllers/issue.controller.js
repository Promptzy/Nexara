
const issueService = require('../services/issue.service');

const listIssues = async (req, res) => {
  try {
    const { id: projectId } = req.params;
    const issues = await issueService.listIssues(projectId);
    res.json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createIssue = async (req, res) => {
  try {
    const { id: projectId } = req.params;
    // abhi hardcode kar diya userId, baad me req.user se aayega
    const issue = await issueService.createIssue(projectId, {
      ...req.body,
    // Validate that reporterId is provided
    if (!req.body.reporterId) {
      return res.status(400).json({ error: 'reporterId is required' });
    }
    const issue = await issueService.createIssue(projectId, {
      ...req.body,
      reporterId: req.body.reporterId,
    });
    res.status(201).json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await issueService.getIssue(id);
    if (!issue) return res.status(404).json({ error: 'Issue not found' });
    res.json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await issueService.updateIssue(id, req.body);
    res.json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateIssueStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const issue = await issueService.updateIssueStatus(id, status);
    res.json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await issueService.addComment(id, req.body.userId || 'temp-user-id', req.body.content);
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listComments = async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await issueService.listComments(id);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  listIssues,
  createIssue,
  getIssue,
  updateIssue,
  updateIssueStatus,
  addComment,
  listComments,
};
