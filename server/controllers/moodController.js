const Mood = require("../models/Mood");

const createMood = async (req, res) => {
    try {

        const mood = await Mood.create({
            user: req.user.id,
            mood: req.body.mood
        });

        res.status(201).json(mood);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { createMood };