const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://lifeos-productivityapp.onrender.com",
    ],
    credentials: true,
  })
);

app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

const habitRoutes = require("./routes/habitRoutes");
app.use("/api/habits", habitRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const moodRoutes = require("./routes/moodRoutes");
app.use("/api/moods", moodRoutes);

const journalRoutes = require("./routes/journalRoutes");
app.use("/api/journals", journalRoutes);

const dashboardRoutes = require("./routes/dashboardRoutes");
app.use("/api/dashboard", dashboardRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("LifeOS API Running...");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    console.log("Database:", mongoose.connection.name);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Local development
if (require.main === module) {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export app for Vercel
module.exports = app;