const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
  tutorId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  subject: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  rating: { 
    type: Number, 
    default: 0 
  },
  studentsEnrolled: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  }],
  reviews: [{ 
    studentId: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, required: true },
    comment: { type: String }
  }],
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Course', CourseSchema);
