const projectService = require('../services/project.service');

async function listProjects(req, res, next) {
  try {
    const userId = req.user?.id; // safe access
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID missing' });
    }

    const projects = await projectService.getAllProjects(userId);

    res.json({ success: true, data: projects });
  } catch (err) {
    console.error("🔥 Error in listProjects:", err);
    next(err);
  }
}

async function getProject(req, res, next) {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID missing' });
    }
    const project = await projectService.getProjectById(req.params.id, userId);
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
}

async function listBoards(req, res, next) {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID missing' });
    }
    const boards = await projectService.getBoardsByProjectId(req.params.id, userId);
    res.json({ success: true, data: boards });
  } catch (err) {
    next(err);
  }
}

async function getBoard(req, res, next) {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID missing' });
    }
    const board = await projectService.getBoardById(req.params.id, userId);
    if (!board) return res.status(404).json({ success: false, message: 'Board not found' });
    res.json({ success: true, data: board });
  } catch (err) {
    next(err);
  }
}

async function listColumns(req, res, next) {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID missing' });
    }
    const columns = await projectService.getColumnsByBoardId(req.params.id, userId);
    res.json({ success: true, data: columns });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listProjects,
  getProject,
  listBoards,
  getBoard,
  listColumns
};
