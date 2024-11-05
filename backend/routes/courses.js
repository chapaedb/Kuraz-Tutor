const express = require("express")
const { coursesController } = require("../controllers")

const router = express.Router()
router.get("/courses", coursesController.listCourses)
router.post("/courses", coursesController.createCourse)
router.get("/courses/:id", coursesController.courseDetails)
router.put("/courses/:id", coursesController.updateCourse)
router.delete("/courses/:id", coursesController.deleteCourse)

module.exports = router;


