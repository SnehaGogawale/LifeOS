const Mood = require("../models/Mood");

// Create Mood
const createMood = async (req, res) => {
  try {
    const { mood } = req.body;

    const newMood = await Mood.create({
      user: req.user.id,
      mood,
    });

    res.status(201).json(newMood);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Moods
const getMoods = async (req, res) => {
  try {
    const moods = await Mood.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(moods);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Mood
const deleteMood = async (req, res) => {
  try {
    const mood = await Mood.findById(req.params.id);

    if (!mood) {
      return res.status(404).json({
        message: "Mood not found",
      });
    }

    if (mood.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    await mood.deleteOne();

    res.json({
      message: "Mood deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMood,
  getMoods,
  deleteMood,
};