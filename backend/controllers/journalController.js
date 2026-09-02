const Journal = require("../models/Journal");

const createJournal = async (req, res) => {
  try {
    const journal = await Journal.create({
      user: req.user.id,
      content: req.body.content,
    });

    res.status(201).json(journal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getJournals = async (req, res) => {
  try {
    const journals = await Journal.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(journals);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateJournal = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);

    if (!journal) {
      return res.status(404).json({
        message: "Journal not found",
      });
    }

    if (journal.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    journal.content = req.body.content || journal.content;

    await journal.save();

    res.json(journal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteJournal = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);

    if (!journal) {
      return res.status(404).json({
        message: "Journal not found",
      });
    }

    if (journal.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    await journal.deleteOne();

    res.json({
      message: "Journal deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createJournal,
  getJournals,
  updateJournal,
  deleteJournal,
};