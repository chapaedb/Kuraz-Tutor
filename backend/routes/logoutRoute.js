const express = require("express")
const logoutUser = require("../Controllers/logoutController")

const router = express.Router()
router.post("/logout", logoutUser)

module.exports = router;