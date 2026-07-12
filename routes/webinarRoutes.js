const express = require("express");
const router = express.Router();

const {
  registerWebinar,
} = require("../controllers/webinarController");

// Register Webinar
router.post("/register", registerWebinar);

module.exports = router;