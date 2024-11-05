const express = require("express")
const getUserprofile = require("../Controllers/profileController")

const router = express.Router()

router.get("user/:id", getUserprofile)

module.exports = router;