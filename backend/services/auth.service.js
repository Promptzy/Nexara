const { prisma } = require('../config/database');

/**
 * Create a new user in the database
 * @param {Object} userData - User data object
 * @param {string} userData.email - User email
 * @param {string} userData.password_hash - Hashed password
 * @param {string} [userData.username] - Optional username
 * @returns {Promise<Object>} - Created user object (without password)
 */
const createUser = async (userData) => {
  try {
    const { email, password_hash, username } = userData;
    
    // Create new user using Prisma
    const newUser = await prisma.user.create({
      data: {
        email: email.toLowerCase().trim(),
        passwordHash: password_hash,
        username: username?.trim() || null,
      },
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
        isActive: true,
      },
    });
    
    return newUser;
  } catch (error) {
    if (error.code === 'P2002') { // Prisma unique constraint violation
      throw new Error('Email already exists');
    }
    throw new Error(`User creation failed: ${error.message}`);
  }
};

/**
 * Find a user by email address
 * @param {string} email - User email
 * @returns {Promise<Object|null>} - User object or null if not found
 */
const findUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase().trim(),
      },
      select: {
        id: true,
        email: true,
        username: true,
        passwordHash: true,
        createdAt: true,
        updatedAt: true,
        isActive: true,
      },
    });
    
    // Only return active users
    if (user && !user.isActive) {
      return null;
    }
    
    return user;
  } catch (error) {
    throw new Error(`User lookup failed: ${error.message}`);
  }
};

/**
 * Find a user by ID
 * @param {string} id - User ID
 * @returns {Promise<Object|null>} - User object (without password) or null if not found
 */
const findUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
        updatedAt: true,
        isActive: true,
      },
    });
    
    // Only return active users
    if (user && !user.isActive) {
      return null;
    }
    
    return user;
  } catch (error) {
    throw new Error(`User lookup failed: ${error.message}`);
  }
};



module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};