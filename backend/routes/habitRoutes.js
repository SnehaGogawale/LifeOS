const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createHabit,
  getHabits,
  updateHabit,
  completeHabit,
  deleteHabit,
} = require("../controllers/habitController");

router.post("/", protect, createHabit);

router.get("/", protect, getHabits);

router.put("/:id", protect, updateHabit);

router.put("/:id/complete", protect, completeHabit);

router.delete("/:id", protect, deleteHabit);

module.exports = router;