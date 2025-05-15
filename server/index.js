import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create a test email transporter
// For production, you would use real credentials
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'username@example.com',
    pass: 'password',
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  
  try {
    // In a real application, you would send an actual email
    // For demonstration purposes, we'll just log the data
    console.log('Contact form submission:', { name, email, subject, message });
    
    /*
    // This would be the actual email sending code
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    */
    
    // Simulate a delay for demonstration purposes
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully! We\'ll get back to you soon.' 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'There was an error sending your message. Please try again later.' 
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});