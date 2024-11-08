const express = require("express");
const mongoose = require("mongoose");
const bookSession = require("../controllers/sessionController");
const { sessionController } = require("../controllers");
const router = express.Router();

router.post("/", sessionController.bookSession);
router.get("/session/:id", sessionController.getSession);
router.post("/session/:id/cancel", sessionController.cancelSession);

module.exports = router;