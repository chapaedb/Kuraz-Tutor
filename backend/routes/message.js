const express = require('express');
const { messageController } = require('../controllers/');

const router = express.Router();

// GET all messages between student and tutor
router.get('/api/messages', messageController.getAllMessages);

// POST send a message
router.post('/api/messages', messageController.createMessage);
router

module.exports = router;
