const Habit = require("../models/Habit");

// Create Habit
const createHabit = async (req, res) => {
  try {
    const { name } = req.body;

    const habit = await Habit.create({
      user: req.user.id,
      name,
    });

    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Habits
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//complete habit
const completeHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found",
      });
    }

    // Check ownership
    if (habit.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const today = new Date();

    // Already completed today
    if (
      habit.lastCompletedDate &&
      habit.lastCompletedDate.toDateString() === today.toDateString()
    ) {
      return res.status(400).json({
        message: "Habit already completed today",
      });
    }

    // Check if yesterday
    if (habit.lastCompletedDate) {
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);

      if (
        habit.lastCompletedDate.toDateString() === yesterday.toDateString()
      ) {
        habit.streak += 1;
      } else {
        habit.streak = 1;
      }
    } else {
      habit.streak = 1;
    }

    //habit.completedToday = true;
    habit.lastCompletedDate = today;

    await habit.save();

    res.json(habit);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found",
      });
    }

    if (habit.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    await habit.deleteOne();

    res.json({
      message: "Habit deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createHabit,getHabits,completeHabit,deleteHabit
};