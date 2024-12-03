const Course = require('../models/Courses')
const listCourses = async(req, res)=>{
    try{
        const {subject, tutorId, page = 1, limit = 10} = req.query
        const query = {}

        if (subject) query.subject = subject;
        if (tutorId) query.tutorId = tutorId;
        
        const courses = await Course.find(query)
        .populate('tutorId', 'name email').skip((page - 1) * limit).limit(Number(limit));
        
        const total = await Course.countDocuments(query);
        res.status(200).json({ courses, total });
    }catch(error){
        res.status(500).json({error: error.message});
    }

}
const createCourse = async(req, res)=>{
    try{
        const {tutorId, title, description, subject, price} = req.body

        const course = new Course({
            tutorId,
            title,
            description,
            subject,
            price
        });

        await course.save();
        res.status(200).json({message: 'Course created successfully', course});
    }catch(error){
        res.status(500).json({error: error.message});
    }
}
const courseDetails = async(req, res)=>{
    try{
        const { id } = req.params;

        const course = await Course.findById(id)
          .populate('tutorId', 'name email')
          .populate('studentsEnrolled', 'name email')
          .populate('reviews.studentId', 'name email');
    
        if (!course) {
          return res.status(404).json({ message: 'Course not found' });
        }
    
        res.status(200).json(course);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}
const updateCourse = async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
  
      const course = await Course.findByIdAndUpdate(
        id,
        { ...updates, updatedAt: Date.now() },
        { new: true, runValidators: true }
      );
  
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
  
      res.status(200).json({ message: 'Course updated successfully', course });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
  
const deleteCourse = async(req, res)=>{
    try{
        const { id } = req.params;

        const course = await Course.findByIdAndDelete(id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json({ message: 'Course deleted successfully' });

    }catch(error){
        res.status(500).json({error: error.message});
    }
}


module.exports = {listCourses, createCourse, courseDetails, updateCourse, deleteCourse}