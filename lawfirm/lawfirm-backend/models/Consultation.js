import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null // Allow null for non-registered users
  },
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    minlength: [2, 'First name must be at least 2 characters long']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    minlength: [2, 'Last name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  practiceArea: {
    type: String,
    required: [true, 'Practice area is required'],
    trim: true,
    enum: [
      'Corporate Law',
      'Criminal Law',
      'Family Law',
      'Real Estate Law',
      'Personal Injury',
      'Immigration Law',
      'Employment Law',
      'Intellectual Property',
      'Tax Law',
      'Other'
    ]
  },
  preferredDate: {
    type: Date,
    required: [true, 'Preferred date is required'],
    validate: {
      validator: function(date) {
        return date > new Date();
      },
      message: 'Preferred date must be in the future'
    }
  },
  preferredTime: {
    type: String,
    required: [true, 'Preferred time is required'],
    match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter a valid time format (HH:MM)']
  },
  caseDescription: {
    type: String,
    required: [true, 'Case description is required'],
    trim: true,
    minlength: [10, 'Case description must be at least 10 characters long'],
    maxlength: [2000, 'Case description cannot exceed 2000 characters']
  },
  urgencyLevel: {
    type: String,
    required: [true, 'Urgency level is required'],
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  additionalInfo: {
    type: String,
    trim: true,
    maxlength: [1000, 'Additional information cannot exceed 1000 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  adminNotes: {
    type: String,
    trim: true,
    maxlength: [1000, 'Admin notes cannot exceed 1000 characters']
  },
  assignedLawyer: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Indexes for better performance
consultationSchema.index({ user: 1 });
consultationSchema.index({ email: 1 });
consultationSchema.index({ status: 1 });
consultationSchema.index({ urgencyLevel: 1 });
consultationSchema.index({ preferredDate: 1 });
consultationSchema.index({ createdAt: -1 });

// Virtual for full name
consultationSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Pre-save middleware to format data
consultationSchema.pre('save', function(next) {
  // Capitalize first letter of names
  this.firstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1).toLowerCase();
  this.lastName = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1).toLowerCase();
  next();
});

const Consultation = mongoose.model('Consultation', consultationSchema);

export default Consultation;