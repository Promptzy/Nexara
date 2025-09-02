const { sendContactFormEmail } = require('../utils/mailer');

/**
 * Handle contact form submissions
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and message' 
      });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }
    
    // Send email
    await sendContactFormEmail({ name, email, message });
    
    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully' 
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send your message. Please try again later.' 
    });
  }
};

module.exports = {
  submitContactForm,
};