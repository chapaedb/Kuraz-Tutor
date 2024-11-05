const express = require('express');
const { getAllMessages, sendMessage } = require('../controllers/messageController');

const router = express.Router();

// GET all messages between student and tutor
router.get('/api/messages', getAllMessages);

// POST send a message
router.post('/api/messages', sendMessage);

module.exports = router;
