const express = require('express');
const { adminController } = require('../controllers');
const router = express.Router();

router.get('/api/admin',adminController.getAllUsers);

module.exports = router;
