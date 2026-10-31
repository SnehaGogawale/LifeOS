
const app = require("../server");
const connectDB = require("../config/db");

const allowedOrigins = [
  "http://localhost:5173",
  "https://lifeosfrontend-iota.vercel.app"
];

module.exports = async (req, res) => {
  const origin = req.headers.origin;

  // CORS headers
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    req.headers["access-control-request-headers"] ||
      "Content-Type, Authorization"
  );

  // Handle preflight request
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
      error: error.message
    });
  }
};
