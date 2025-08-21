//seed.js

const { PrismaClient } = require('@prisma/client');
const { hashPassword } = require('../utils/password');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  const existingUsers = await prisma.user.count();

  if (existingUsers > 0) {
    console.log(
      `ℹ️  Database already contains ${existingUsers} user(s). Skipping seed.`
    );
    return;
  }

  // Default admin user
  const adminUser = {
    email: 'admin@zenjira.com',
    username: 'admin',
    password: 'AdminPassword123!', // ⚠️ Change in production!
  };

  try {
    const passwordHash = await hashPassword(adminUser.password);

    const user = await prisma.user.create({
      data: {
        email: adminUser.email,
        username: adminUser.username,
        passwordHash,
      },
      select: { id: true, email: true, username: true, createdAt: true },
    });

    console.log(`✅ Created admin user: ${user.email} (${user.username})`);

    // Create a sample project
    const project = await prisma.project.create({
      data: {
        name: 'Sample Project',
        description: 'This is a seeded project for testing APIs',
        ownerId: user.id,
      },
    });

    // Create a sample board under the project
    const board = await prisma.board.create({
      data: {
        name: 'Development Board',
        description: 'Tracks development tasks',
        projectId: project.id,
      },
    });

    // Create sample columns for the board
    await prisma.column.createMany({
      data: [
        { name: 'To Do', orderIndex: 1, boardId: board.id },
        { name: 'In Progress', orderIndex: 2, boardId: board.id },
        { name: 'Done', orderIndex: 3, boardId: board.id },
      ],
    });

    // ✅ Create a sample issue under the project
    const issue = await prisma.issue.create({
      data: {
        title: 'Fix login bug',
        description: 'Users cannot log in with correct credentials',
        status: 'OPEN',
        projectId: project.id,
        reporterId: user.id,
      },
    });

    // ✅ Create sample comments under the issue
    await prisma.comment.createMany({
      data: [
        {
          content: 'I am looking into this issue.',
          issueId: issue.id,
          userId: user.id,
        },
        {
          content: 'Bug reproduced on staging environment.',
          issueId: issue.id,
          userId: user.id,
        },
      ],
    });

    console.log(
      `📊 Seeded Project, Board, Columns, Issue, and Comments for user: ${user.username}`
    );
    console.log(`\n🔑 Default Admin Credentials:`);
    console.log(`   Email: ${adminUser.email}`);
    console.log(`   Username: ${adminUser.username}`);
    console.log(`   Password: ${adminUser.password}`);
    console.log(`\n⚠️ Change password after first login!`);
  } catch (error) {
    console.error(`❌ Failed during seeding:`, error.message);
    throw error;
  }
}

main()
  .catch(e => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
