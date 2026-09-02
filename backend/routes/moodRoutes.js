const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createMood,
  getMoods,
  deleteMood,
} = require("../controllers/moodController");

router.post("/", protect, createMood);

router.get("/", protect, getMoods);

router.delete("/:id", protect, deleteMood);

module.exports = router;