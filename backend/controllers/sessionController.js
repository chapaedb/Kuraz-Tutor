const Session = require('../models/Sessions');
const Course = require('../models/Courses');
   
const bookSession = async (req, res) => {
    try{
        const {courseId, tutorId, studentId, startTime, endTime, meetingLink } = req.body

        const session = new Session({
            courseId,
            tutorId,
            studentId,
            startTime,
            endTime,
            meetingLink,
        });
        await session.save();
        res.status(200).json({message: 'session created successfully', session});   
    }catch(error){
        res.status(500).json({error: 'Failed to book session', details: error.message});
    }
}
const cancelSession = async (req, res) => {
    try{
        const {id} = req.params
        const session = await Session.findByIdAndDelete(id)
        if(!session){
            res.status(404).json({error: 'Session not found'})
        }
        res.status(200).json({message: 'Session deleted successfully'})
    }catch(error){
        res.status(500).json({error: 'Failed to delete the session', details: error.message})
    }
}
const getSession = async (req, res) => {
    try {
        const { id } = req.params;
        const session = await Session.findById(id).populate('courseId tutorId studentId');
        if (!session) {
            return res.status(404).json({ error: 'Session not found' });
        }
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve session', details: error.message });
    }

}
module.exports = {bookSession, cancelSession, getSession};
