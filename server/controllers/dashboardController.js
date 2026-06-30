const Task = require("../models/Task");
const Habit = require("../models/Habit");
const Mood = require("../models/Mood");
const Journal = require("../models/Journal");

const getDashboard = async (req, res) => {
  try {
    // ==========================
    // Today's Date Range
    // ==========================

    const today = new Date();

    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    // ==========================
    // Task Statistics
    // ==========================

    const totalTasks = await Task.countDocuments({
      user: req.user.id,
    });

    const completedTasks = await Task.countDocuments({
      user: req.user.id,
      completed: true,
    });

    const pendingTasks = totalTasks - completedTasks;

    // ==========================
    // Habit Statistics
    // ==========================

    const totalHabits = await Habit.countDocuments({
      user: req.user.id,
    });

    const completedToday = await Habit.countDocuments({
      user: req.user.id,
      lastCompletedDate: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    const longestHabit = await Habit.findOne({
      user: req.user.id,
    }).sort({
      streak: -1,
    });

    const longestStreak = longestHabit
      ? longestHabit.streak
      : 0;

    // ==========================
    // Mood Statistics
    // ==========================

    const moods = await Mood.find({
      user: req.user.id,
    });

    const todayMood = await Mood.findOne({
      user: req.user.id,
      createdAt: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    }).sort({
      createdAt: -1,
    });

    let averageMood = 0;

    if (moods.length > 0) {
      const totalMood = moods.reduce((sum, mood) => {
        return sum + mood.mood;
      }, 0);

      averageMood = totalMood / moods.length;
    }

    // ==========================
    // Journal Statistics
    // ==========================

    const totalEntries = await Journal.countDocuments({
      user: req.user.id,
    });

    const writtenToday = await Journal.exists({
      user: req.user.id,
      createdAt: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    // ==========================
    // Productivity Score
    // ==========================

    const taskScore =
      totalTasks === 0
        ? 0
        : (completedTasks / totalTasks) * 50;

    const habitScore =
      totalHabits === 0
        ? 0
        : (completedToday / totalHabits) * 30;

    const moodScore = todayMood
      ? (todayMood.mood / 10) * 20
      : 0;

    const productivityScore = Math.round(
      taskScore + habitScore + moodScore
    );

    // ==========================
    // Response
    // ==========================

    res.status(200).json({
      tasks: {
        total: totalTasks,
        completed: completedTasks,
        pending: pendingTasks,
      },

      habits: {
        total: totalHabits,
        completedToday,
        longestStreak,
      },

      mood: {
        today: todayMood ? todayMood.mood : null,
        average: Number(averageMood.toFixed(1)),
      },

      journal: {
        entries: totalEntries,
        writtenToday: !!writtenToday,
      },

      productivityScore,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};