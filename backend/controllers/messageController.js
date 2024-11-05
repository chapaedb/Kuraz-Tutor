// messageController.js

// Create a new message
const createMessage = (req, res) => {
    // Logic to create a new message
    res.send('Message created');
};

// Get all messages
const getAllMessages = (req, res) => {
    // Logic to get all messages
    res.send('All messages');
};

// Get a single message by ID
const getMessageById = (req, res) => {
    // Logic to get a message by ID
    res.send(`Message with ID: ${req.params.id}`);
};





module.exports = {
    createMessage,
    getAllMessages,
    getMessageById,
    
};