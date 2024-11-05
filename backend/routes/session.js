const express = require("express");
const mongoose = require("mongoose");
const bookSession = require("../controllers/sessionController");
const router = express.Router();

router.post("/session", control);
module.exports = router;