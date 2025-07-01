import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send welcome email to new users
export const sendWelcomeEmail = async (email, firstName) => {
  try {
    if (!process.env.EMAIL_USER) {
      console.log('Email service not configured, skipping welcome email');
      return;
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Our Law Firm',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">Welcome to Our Law Firm</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Dear ${firstName},</p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Thank you for registering with our law firm. We're here to help you with all your legal needs.</p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Your account has been successfully created. You can now:</p>
            <ul style="font-size: 16px; line-height: 1.8; color: #333; padding-left: 20px;">
              <li>Book consultations online</li>
              <li>Track your case progress</li>
              <li>Access legal resources</li>
              <li>Manage your profile and preferences</li>
            </ul>
            <div style="text-align: center; margin: 30px 0;">
              <a href="#" style="background-color: #3498db; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">Access Your Account</a>
            </div>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">If you have any questions, please don't hesitate to contact us.</p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Best regards,<br><strong>The Legal Team</strong></p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully to:', email);
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
};

// Send consultation confirmation email
export const sendConsultationConfirmation = async (email, consultationData) => {
  try {
    if (!process.env.EMAIL_USER) {
      console.log('Email service not configured, skipping confirmation email');
      return;
    }

    const transporter = createTransporter();
    const { firstName, lastName, practiceArea, preferredDate, preferredTime, consultationId } = consultationData;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Consultation Booking Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #27ae60; text-align: center; margin-bottom: 30px;">Consultation Booked Successfully</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Dear ${firstName} ${lastName},</p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Your consultation has been successfully booked. Here are the details:</p>
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #3498db;">
              <p style="margin: 8px 0; font-size: 16px;"><strong>Consultation ID:</strong> ${consultationId}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Practice Area:</strong> ${practiceArea}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Preferred Time:</strong> ${preferredTime}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Status:</strong> <span style="color: #f39c12; font-weight: bold;">Pending Confirmation</span></p>
            </div>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Our team will review your request and contact you within 24 hours to confirm the appointment.</p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">If you need to make any changes or have questions, please contact us immediately.</p>
            <div style="text-align: center; margin: 30px 0;">
              <p style="font-size: 14px; color: #666;">Reference ID: ${consultationId}</p>
            </div>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Best regards,<br><strong>The Legal Team</strong></p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Consultation confirmation email sent to:', email);
  } catch (error) {
    console.error('Error sending consultation confirmation email:', error);
    throw error;
  }
};

// Notify admin of new consultation
export const notifyAdminNewConsultation = async (consultationData) => {
  try {
    if (!process.env.EMAIL_USER || !process.env.ADMIN_EMAIL) {
      console.log('Email service not configured, skipping admin notification');
      return;
    }

    const transporter = createTransporter();
    const { firstName, lastName, email, phone, practiceArea, urgencyLevel, consultationId } = consultationData;

    const urgencyColors = {
      urgent: '#e74c3c',
      high: '#f39c12',
      medium: '#3498db',
      low: '#27ae60'
    };

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Consultation Booking - ${urgencyLevel.toUpperCase()} Priority`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">New Consultation Booking</h2>
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid ${urgencyColors[urgencyLevel]};">
              <p style="margin: 8px 0; font-size: 16px;"><strong>Consultation ID:</strong> ${consultationId}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Client:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Practice Area:</strong> ${practiceArea}</p>
              <p style="margin: 8px 0; font-size: 16px;"><strong>Urgency Level:</strong> <span style="color: ${urgencyColors[urgencyLevel]}; font-weight: bold;">${urgencyLevel.toUpperCase()}</span></p>
            </div>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Please review this consultation request and contact the client to confirm the appointment.</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="#" style="background-color: #3498db; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">View in Admin Dashboard</a>
            </div>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Login to the admin dashboard to manage this consultation.</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Admin notification email sent for consultation:', consultationId);
  } catch (error) {
    console.error('Error sending admin notification email:', error);
    throw error;
  }
};