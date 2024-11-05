const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    courseId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Course', 
      required: true 
    },
    tutorId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    studentId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    startTime: { 
      type: Date, 
      required: true 
    },
    endTime: { 
      type: Date, 
      required: true 
    },
    status: { 
      type: String, 
      enum: ['booked', 'completed', 'cancelled'], 
      default: 'booked' 
    },
    meetingLink: { 
      type: String 
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    }
});

module.exports = mongoose.model('Session', SessionSchema);
