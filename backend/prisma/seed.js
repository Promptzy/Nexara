// const { PrismaClient } = require('@prisma/client');
// const { hashPassword } = require('../utils/password');

// const prisma = new PrismaClient();

// async function main() {
//   console.log('🌱 Starting database seed...');

//   // Check if database is already seeded
//   const existingUsers = await prisma.user.count();

//   if (existingUsers > 0) {
//     console.log(
//       `ℹ️  Database already contains ${existingUsers} user(s). Skipping seed.`
//     );
//     console.log('   Use --force flag or clear database to reseed.');
//     return;
//   }

//   // Create default admin user for production
//   const adminUser = {
//     email: 'admin@zenjira.com',
//     username: 'admin',
//     password: 'AdminPassword123!', // Change this in production!
//   };

//   try {
//     // Hash password
//     const passwordHash = await hashPassword(adminUser.password);

//     // Create admin user
//     const user = await prisma.user.create({
//       data: {
//         email: adminUser.email,
//         username: adminUser.username,
//         passwordHash: passwordHash,
//       },
//       select: {
//         id: true,
//         email: true,
//         username: true,
//         createdAt: true,
//       },
//     });

//     console.log(`✅ Created admin user: ${user.email} (${user.username})`);

//     console.log(`\n📊 Database seeded successfully!`);
//     console.log(`   Total users: 1`);
//     console.log(`\n🔑 Default Admin Credentials:`);
//     console.log(`   Email: ${adminUser.email}`);
//     console.log(`   Username: ${adminUser.username}`);
//     console.log(`   Password: ${adminUser.password}`);
//     console.log(
//       `\n⚠️  IMPORTANT: Change the admin password after first login!`
//     );
//   } catch (error) {
//     console.error(`❌ Failed to create admin user:`, error.message);
//     throw error;
//   }
// }

// main()
//   .catch(e => {
//     console.error('❌ Seed failed:', e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });





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
    password: 'AdminPassword123!', // Change in production!
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

    console.log(`📊 Seeded Project, Board, and Columns for user: ${user.username}`);
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

