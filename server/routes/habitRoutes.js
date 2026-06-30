const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const { createHabit, getHabits, completeHabit } = require("../controllers/habitController");

router.post("/", protect, createHabit);
router.get("/",protect,getHabits);
router.put("/:id/complete", protect, completeHabit);
module.exports = router;