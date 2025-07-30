const { PrismaClient } = require('@prisma/client');
const { hashPassword } = require('../utils/password');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Check if database is already seeded
  const existingUsers = await prisma.user.count();

  if (existingUsers > 0) {
    console.log(
      `ℹ️  Database already contains ${existingUsers} user(s). Skipping seed.`
    );
    console.log('   Use --force flag or clear database to reseed.');
    return;
  }

  // Create default admin user for production
  const adminUser = {
    email: 'admin@zenjira.com',
    username: 'admin',
    password: 'AdminPassword123!', // Change this in production!
  };

  try {
    // Hash password
    const passwordHash = await hashPassword(adminUser.password);

    // Create admin user
    const user = await prisma.user.create({
      data: {
        email: adminUser.email,
        username: adminUser.username,
        passwordHash: passwordHash,
      },
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
      },
    });

    console.log(`✅ Created admin user: ${user.email} (${user.username})`);

    console.log(`\n📊 Database seeded successfully!`);
    console.log(`   Total users: 1`);
    console.log(`\n🔑 Default Admin Credentials:`);
    console.log(`   Email: ${adminUser.email}`);
    console.log(`   Username: ${adminUser.username}`);
    console.log(`   Password: ${adminUser.password}`);
    console.log(
      `\n⚠️  IMPORTANT: Change the admin password after first login!`
    );
  } catch (error) {
    console.error(`❌ Failed to create admin user:`, error.message);
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
