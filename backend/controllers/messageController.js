const messageModel = require("../models/Messages");

const createMessage = async(req, res) => {
    const {sessionId, senderId, receiverId, content} = req.body;

    const message = new messageModel({
        sessionId,
        senderId,
        receiverId,
        content

    })
    try{
        const response = await message.save();
        res.status(200).json({message: 'message created', response});

    }catch(error){
        res.status(500).json({message: 'Error creating message', error});
    }
};

const getAllMessages = async(req, res) => {
    const {sessionId} = req.params;
    try{
        const messages = await messageModel.find({sessionId});
        res.status(200).json(messages);
    }catch(error){
        res.status(500).json({message: 'Error fetching data', error});
    }
};

const getMessageById = async(req, res) => {
    const {id} = req.params;
    try{
        const message = await messageModel.findById(id);
        if(!message){
            return res.status(404).json({message: 'message is not found'})
        }
        res.status(200).json(message)
    }catch(error){
        res.status(500).json(error);
    }
};





module.exports = {
    createMessage,
    getAllMessages,
    getMessageById,
    
};