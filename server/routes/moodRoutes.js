const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const { createMood } = require("../controllers/moodController");

router.post("/", protect, createMood);

module.exports = router;