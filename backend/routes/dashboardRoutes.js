const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getDashboard,
  getWeeklyActivity,
} = require("../controllers/dashboardController");

router.get("/", protect, getDashboard);

router.get("/weekly", protect, getWeeklyActivity);

module.exports = router;