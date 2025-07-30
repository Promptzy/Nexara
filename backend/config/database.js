const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ['error'],
});
const testConnection = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully (Prisma)');
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
  }
};

const disconnectDatabase = async () => {
  try {
    await prisma.$disconnect();
  } catch (err) {
    console.error('❌ Database disconnection failed:', err.message);
  }
};

module.exports = {
  prisma,
  testConnection,
  disconnectDatabase,
};