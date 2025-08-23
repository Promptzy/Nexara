//issue.service.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listIssues = async projectId => {
  return prisma.issue.findMany({
    where: { projectId },
    include: { comments: true },
  });
};

const createIssue = async (projectId, data) => {
  return prisma.issue.create({
    data: {
      title: data.title,
      description: data.description,
      status: data.status || 'OPEN',
      projectId,
      reporterId: data.reporterId,
    },
  });
};

const getIssue = async issueId => {
  return prisma.issue.findUnique({
    where: { id: issueId },
    include: { comments: true, reporter: true, project: true },
  });
};

const updateIssue = async (issueId, data) => {
  return prisma.issue.update({
    where: { id: issueId },
    data,
  });
};

const updateIssueStatus = async (issueId, status) => {
  return prisma.issue.update({
    where: { id: issueId },
    data: { status },
  });
};

const addComment = async (issueId, userId, content) => {
  return prisma.comment.create({
    data: {
      content,
      issueId,
      userId,
    },
  });
};

const listComments = async issueId => {
  return prisma.comment.findMany({
    where: { issueId },
    include: { user: true },
  });
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
