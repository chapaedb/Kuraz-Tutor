const mongoose = require('mongoose')
const {Schema} = mongoose;
const MessageSchema = new Schema({
    sessionId: { 
      type: Schema.Types.ObjectId, 
      ref: 'Session', 
      required: true 
    },
    senderId: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    receiverId: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    content: { 
      type: String, 
      required: true 
    },
    timestamp: { 
      type: Date, 
      default: Date.now 
    }
  });
  
  module.exports = mongoose.model('Message', MessageSchema);
  