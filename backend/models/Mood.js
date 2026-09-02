const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    mood: {
      type: Number,
      min: 1,
      max: 10,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Mood", moodSchema);