const Mood = require("../models/Mood");

// Create Mood
const createMood = async (req, res) => {
  try {
    const mood = await Mood.create({
      user: req.user.id,
      mood: req.body.mood,
    });

    res.status(201).json(mood);
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

module.exports = {
  createMood,
  getMoods,
};