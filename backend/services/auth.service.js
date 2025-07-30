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
 * Find a user by username
 * @param {string} username - Username
 * @returns {Promise<Object|null>} - User object or null if not found
 */
const findUserByUsername = async (username) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username.trim(),
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
 * Find a user by email or username (for login)
 * @param {string} identifier - Email or username
 * @returns {Promise<Object|null>} - User object or null if not found
 */
const findUserByEmailOrUsername = async (identifier) => {
  try {
    const trimmedIdentifier = identifier.trim();
    
    // Check if identifier looks like an email
    const isEmail = trimmedIdentifier.includes('@');
    
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: isEmail ? trimmedIdentifier.toLowerCase() : undefined },
          { username: !isEmail ? trimmedIdentifier : undefined },
          // Also search both fields to be safe
          { email: trimmedIdentifier.toLowerCase() },
          { username: trimmedIdentifier },
        ].filter(condition => Object.values(condition).some(val => val !== undefined)),
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
  findUserByUsername,
  findUserByEmailOrUsername,
  findUserById,
};