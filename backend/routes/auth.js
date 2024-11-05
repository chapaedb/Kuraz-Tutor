const express = require("express");
const { authController } = require("../controllers/");

const router = express.Router()
const { registerUser } = require("../Controllers/registerController");


router.post("/register", authController.registerUser)
router.post("/login", authController.loginUser)

router.post("/logout", authController.logoutUser)

module.exports = router;