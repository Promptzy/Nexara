// const express = require('express');
// const router = express.Router();
// const projectController = require('../controllers/project.controller');
// // const { authenticate } = require('../middleware/authMiddleware');

// router.get('/projects', projectController.listProjects);
// router.get('/projects/:id', projectController.getProject);
// router.get('/projects/:id/boards', projectController.listBoards);
// router.get('/boards/:id', projectController.getBoard);
// router.get('/boards/:id/columns', projectController.listColumns);

// module.exports = router;

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const { authMiddleware } = require('../middleware/authMiddleware');

// protected routes
router.get('/projects', authMiddleware, projectController.listProjects);
router.get('/projects/:id', authMiddleware, projectController.getProject);
router.get(
  '/projects/:id/boards',
  authMiddleware,
  projectController.listBoards
);
router.get('/boards/:id', authMiddleware, projectController.getBoard);
router.get(
  '/boards/:id/columns',
  authMiddleware,
  projectController.listColumns
);

module.exports = router;
