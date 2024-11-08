const express = require('express');
const { paymentController } = require('../controllers');
const router = express.Router();

router.post('/session/:id', paymentController.MakePayment);

module.exports = router;