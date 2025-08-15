const projectService = require('../services/project.service');

async function listProjects(req, res, next) {
  try {
    const userId = req.user?.id; // safe access
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID missing' });
    }

    const projects = await prisma.project.findMany({
      where: { userId }
    });

    res.json({ success: true, data: projects });
  } catch (err) {
    console.error("🔥 Error in listProjects:", err);
    next(err);
  }
}

async function getProject(req, res, next) {
  try {
    const project = await projectService.getProjectById(req.params.id, req.user.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    next(err);
  }
}

async function listBoards(req, res, next) {
  try {
    const boards = await projectService.getBoardsByProjectId(req.params.id, req.user.id);
    res.json(boards);
  } catch (err) {
    next(err);
  }
}

async function getBoard(req, res, next) {
  try {
    const board = await projectService.getBoardById(req.params.id, req.user.id);
    if (!board) return res.status(404).json({ message: 'Board not found' });
    res.json(board);
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
    res.json(columns);
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
