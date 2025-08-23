const bcrypt = require('bcrypt');

const hashPassword = async password => {
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

const validatePasswordStrength = (password) => {
  const isValid =
    password.length >= 8 &&
    /[a-z]/.test(password) &&      // at least one lowercase
    /[A-Z]/.test(password) &&      // at least one uppercase
    /\d/.test(password) &&         // at least one number
    /[!@#$%^&*(),.?":{}|<>]/.test(password); // at least one special character

  return {
    isValid,
    message: isValid
      ? 'Password is strong'
      : 'Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character.',
  };
};

module.exports = {
  hashPassword,
  comparePassword,
  validatePasswordStrength
};
