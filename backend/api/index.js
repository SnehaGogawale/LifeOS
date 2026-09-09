const app = require("../server");
const connectDB = require("../config/db");

const allowedOrigin = "https://lifeosfrontend-iota.vercel.app";

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle browser preflight request
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  try {
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