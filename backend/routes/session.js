const express = require("express");
const mongoose = require("mongoose");
const bookSession = require("../controllers/sessionController");
const { sessionController } = require("../controllers");
const router = express.Router();

router.post("/session", sessionController.bookSession);
module.exports = router;