const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
// const { authenticate } = require('../middleware/authMiddleware');

router.get('/projects', projectController.listProjects);
router.get('/projects/:id', projectController.getProject);
router.get('/projects/:id/boards', projectController.listBoards);
router.get('/boards/:id', projectController.getBoard);
router.get('/boards/:id/columns', projectController.listColumns);

module.exports = router;
