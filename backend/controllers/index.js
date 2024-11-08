
const authController = require('./authController');
const sessionController = require('./sessionController');
const adminController = require('./adminController');
const paymentController = require('./paymentController');
const messageController = require('./messageController');
const coursesController = require('./coursesController');
// Importing modules

// Exporting modules
module.exports = {
    authController,
    sessionController,
    adminController,
    paymentController,
    messageController,
    coursesController
};