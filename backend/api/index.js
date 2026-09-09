const app = require("../server");
const connectDB = require("../config/db");

module.exports = async (req, res) => {
  try {
    // Let CORS preflight requests pass through
    // without waiting for MongoDB.
    if (req.method === "OPTIONS") {
      return app(req, res);
    }

    // Connect to MongoDB before API requests
    await connectDB();

    return app(req, res);
  } catch (error) {
    console.error("Database connection error:", error);

    return res.status(500).json({
      message: "Database connection failed",
      error: error.message,
    });
  }
};