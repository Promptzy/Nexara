const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllProjects(userId) {
  return prisma.project.findMany({
    where: { ownerId: userId },
  });
}

async function getProjectById(projectId, userId) {
  return prisma.project.findFirst({
    where: { id: projectId, ownerId: userId },
    include: { boards: true },
  });
}

async function getBoardsByProjectId(projectId, userId) {
  const project = await prisma.project.findFirst({
    where: { id: projectId, ownerId: userId },
    include: { boards: true },
  });
  return project ? project.boards : [];
}

async function getBoardById(boardId, userId) {
  return prisma.board.findFirst({
    where: { id: boardId, project: { ownerId: userId } },
    include: { columns: true },
  });
}

async function getColumnsByBoardId(boardId, userId) {
  const board = await prisma.board.findFirst({
    where: { id: boardId, project: { ownerId: userId } },
    include: { columns: true },
  });
  return board ? board.columns : [];
}

module.exports = {
  getAllProjects,
  getProjectById,
  getBoardsByProjectId,
  getBoardById,
  getColumnsByBoardId,
};
