const { PrismaClient } = require('@prisma/client');
const { hashPassword } = require('../utils/password');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create test users
  const testUsers = [
    {
      email: 'admin@zenjira.com',
      username: 'admin',
      password: 'AdminPassword123!',
    },
    {
      email: 'user@zenjira.com',
      username: 'testuser',
      password: 'UserPassword123!',
    },
    {
      email: 'demo@zenjira.com',
      username: 'demo',
      password: 'DemoPassword123!',
    },
  ];

  for (const userData of testUsers) {
    try {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: userData.email },
      });

      if (existingUser) {
        console.log(`👤 User ${userData.email} already exists, skipping...`);
        continue;
      }

      // Hash password
      const passwordHash = await hashPassword(userData.password);

      // Create user
      const user = await prisma.user.create({
        data: {
          email: userData.email,
          username: userData.username,
          passwordHash: passwordHash,
        },
        select: {
          id: true,
          email: true,
          username: true,
          createdAt: true,
        },
      });

      console.log(`✅ Created user: ${user.email} (${user.username})`);
    } catch (error) {
      console.error(`❌ Failed to create user ${userData.email}:`, error.message);
    }
  }

  // Get user statistics
  const stats = await prisma.user.aggregate({
    _count: {
      id: true,
    },
  });

  console.log(`\n📊 Database seeded successfully!`);
  console.log(`   Total users: ${stats._count.id}`);
  console.log(`\n🔑 Test Credentials:`);
  testUsers.forEach(user => {
    console.log(`   Email: ${user.email} | Password: ${user.password}`);
  });
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });