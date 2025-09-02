const nodemailer = require('nodemailer');

/**
 * Creates a transporter for sending emails using Nodemailer
 * @returns {nodemailer.Transporter} Configured Nodemailer transporter
 */
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

/**
 * Sends an email using Nodemailer
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Plain text email content
 * @param {string} options.html - HTML email content (optional)
 * @returns {Promise<Object>} - Nodemailer send result
 */
const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Nexara'}" <${process.env.EMAIL_FROM || process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html: html || undefined,
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

/**
 * Sends a contact form submission email
 * @param {Object} formData - Contact form data
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.message - Message content
 * @returns {Promise<Object>} - Email send result
 */
const sendContactFormEmail = async ({ name, email, message }) => {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_FROM || process.env.SMTP_USER;
  
  const subject = `New Contact Form Submission from ${name}`;
  
  const text = `
    New contact form submission:
    
    Name: ${name}
    Email: ${email}
    
    Message:
    ${message}
  `;
  
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;
  
  return sendEmail({
    to: adminEmail,
    subject,
    text,
    html,
  });
};

module.exports = {
  sendEmail,
  sendContactFormEmail,
};