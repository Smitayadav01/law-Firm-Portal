import express from 'express';
import { body, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';
import Consultation from '../models/Consultation.js';
import { authenticateToken } from '../middleware/auth.js';
import { sendConsultationConfirmation, notifyAdminNewConsultation } from '../utils/emailService.js';

const router = express.Router();

// Book a consultation (public endpoint - can be used by non-registered users)
router.post('/book', [
  body('firstName').trim().isLength({ min: 2 }),
  body('lastName').trim().isLength({ min: 2 }),
  body('email').isEmail().normalizeEmail(),
  body('phone').isMobilePhone(),
  body('practiceArea').trim().isLength({ min: 2 }),
  body('preferredDate').isISO8601(),
  body('preferredTime').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  body('caseDescription').trim().isLength({ min: 10 }),
  body('urgencyLevel').isIn(['low', 'medium', 'high', 'urgent'])
], asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: errors.array()
    });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    practiceArea,
    preferredDate,
    preferredTime,
    caseDescription,
    urgencyLevel,
    additionalInfo
  } = req.body;

  // Check if user is authenticated (optional)
  let userId = null;
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const jwt = await import('jsonwebtoken');
      const decoded = jwt.default.verify(token, process.env.JWT_SECRET);
      userId = decoded.userId;
    } catch (error) {
      // Token invalid, but that's okay for public booking
    }
  }

  // Create consultation booking
  const consultation = new Consultation({
    user: userId,
    firstName,
    lastName,
    email,
    phone,
    practiceArea,
    preferredDate,
    preferredTime,
    caseDescription,
    urgencyLevel,
    additionalInfo,
    status: 'pending'
  });

  await consultation.save();

  // Send confirmation email to client
  try {
    await sendConsultationConfirmation(email, {
      firstName,
      lastName,
      practiceArea,
      preferredDate,
      preferredTime,
      consultationId: consultation._id
    });
  } catch (emailError) {
    console.error('Confirmation email error:', emailError);
  }

  // Notify admin of new consultation
  try {
    await notifyAdminNewConsultation({
      firstName,
      lastName,
      email,
      phone,
      practiceArea,
      urgencyLevel,
      consultationId: consultation._id
    });
  } catch (emailError) {
    console.error('Admin notification error:', emailError);
  }

  res.status(201).json({
    success: true,
    message: 'Consultation booked successfully',
    data: {
      consultationId: consultation._id,
      status: consultation.status
    }
  });
}));

// Get user's consultations (protected)
router.get('/my-consultations', authenticateToken, asyncHandler(async (req, res) => {
  const consultations = await Consultation.find({ user: req.user._id })
    .sort({ createdAt: -1 });

  res.json({
    success: true,
    data: { consultations }
  });
}));

// Get consultation by ID (protected)
router.get('/:id', authenticateToken, asyncHandler(async (req, res) => {
  const consultation = await Consultation.findOne({
    _id: req.params.id,
    user: req.user._id
  });

  if (!consultation) {
    return res.status(404).json({
      success: false,
      message: 'Consultation not found'
    });
  }

  res.json({
    success: true,
    data: { consultation }
  });
}));

// Cancel consultation (protected)
router.patch('/:id/cancel', authenticateToken, asyncHandler(async (req, res) => {
  const consultation = await Consultation.findOneAndUpdate(
    {
      _id: req.params.id,
      user: req.user._id,
      status: { $in: ['pending', 'confirmed'] }
    },
    { 
      status: 'cancelled',
      updatedAt: new Date()
    },
    { new: true }
  );

  if (!consultation) {
    return res.status(404).json({
      success: false,
      message: 'Consultation not found or cannot be cancelled'
    });
  }

  res.json({
    success: true,
    message: 'Consultation cancelled successfully',
    data: { consultation }
  });
}));

export default router;