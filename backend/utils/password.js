const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  try {
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 12;
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    throw new Error(`Password hashing failed: ${error.message}`);
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw new Error(`Password comparison failed: ${error.message}`);
  }
};

module.exports = {
  hashPassword,
  comparePassword,
};