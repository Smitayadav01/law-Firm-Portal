import express from 'express';
import { body, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import Consultation from '../models/Consultation.js';
import { authenticateToken, requireAdmin, generateToken } from '../middleware/auth.js';

const router = express.Router();

// Admin login (separate from regular user login)
router.post('/login', [
  body('username').trim().isLength({ min: 3 }),
  body('password').isLength({ min: 6 })
], asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: errors.array()
    });
  }

  const { username, password } = req.body;

  // Simple admin check (you can enhance this with database storage)
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const token = generateToken('admin');

    res.json({
      success: true,
      message: 'Admin login successful',
      data: {
        user: {
          id: 'admin',
          username: 'Admin',
          role: 'admin'
        },
        token
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid admin credentials'
    });
  }
}));

// Get all users (admin only)
router.get('/users', authenticateToken, requireAdmin, asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const users = await User.find({ role: 'client' })
    .select('-password')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await User.countDocuments({ role: 'client' });

  res.json({
    success: true,
    data: {
      users,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  });
}));

// Get all consultations (admin only)
router.get('/consultations', authenticateToken, requireAdmin, asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const status = req.query.status;
  const urgency = req.query.urgency;
  const skip = (page - 1) * limit;

  let filter = {};
  if (status) filter.status = status;
  if (urgency) filter.urgencyLevel = urgency;

  const consultations = await Consultation.find(filter)
    .populate('user', 'firstName lastName email phone')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Consultation.countDocuments(filter);

  res.json({
    success: true,
    data: {
      consultations,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  });
}));

// Update consultation status (admin only)
router.patch('/consultations/:id/status', authenticateToken, requireAdmin, [
  body('status').isIn(['pending', 'confirmed', 'completed', 'cancelled'])
], asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: errors.array()
    });
  }

  const { status, adminNotes, assignedLawyer } = req.body;

  const consultation = await Consultation.findByIdAndUpdate(
    req.params.id,
    { 
      status,
      adminNotes,
      assignedLawyer,
      updatedAt: new Date()
    },
    { new: true }
  ).populate('user', 'firstName lastName email phone');

  if (!consultation) {
    return res.status(404).json({
      success: false,
      message: 'Consultation not found'
    });
  }

  res.json({
    success: true,
    message: 'Consultation updated successfully',
    data: { consultation }
  });
}));

// Get dashboard statistics (admin only)
router.get('/dashboard/stats', authenticateToken, requireAdmin, asyncHandler(async (req, res) => {
  // Get user count
  const userCount = await User.countDocuments({ role: 'client' });

  // Get consultation count
  const consultationCount = await Consultation.countDocuments();

  // Get pending consultations
  const pendingConsultations = await Consultation.countDocuments({ status: 'pending' });

  // Get urgent consultations
  const urgentConsultations = await Consultation.countDocuments({ urgencyLevel: 'urgent' });

  // Get recent consultations
  const recentConsultations = await Consultation.find()
    .populate('user', 'firstName lastName email')
    .sort({ createdAt: -1 })
    .limit(5);

  // Get monthly stats
  const currentMonth = new Date();
  currentMonth.setDate(1);
  currentMonth.setHours(0, 0, 0, 0);

  const monthlyUsers = await User.countDocuments({
    createdAt: { $gte: currentMonth },
    role: 'client'
  });

  const monthlyConsultations = await Consultation.countDocuments({
    createdAt: { $gte: currentMonth }
  });

  res.json({
    success: true,
    data: {
      stats: {
        totalUsers: userCount,
        totalConsultations: consultationCount,
        pendingConsultations,
        urgentConsultations,
        monthlyUsers,
        monthlyConsultations
      },
      recentConsultations
    }
  });
}));

// Get consultation details (admin only)
router.get('/consultations/:id', authenticateToken, requireAdmin, asyncHandler(async (req, res) => {
  const consultation = await Consultation.findById(req.params.id)
    .populate('user', 'firstName lastName email phone createdAt');

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

export default router;