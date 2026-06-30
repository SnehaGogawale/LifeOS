const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
dotenv.config();

//login
const authRoutes = require("./routes/authRoutes");
app.use(express.json());
app.use("/api/auth", authRoutes);

//tasks
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

//habit 
const habitRoutes = require("./routes/habitRoutes");
app.use("/api/habits", habitRoutes);

//user register
const mongoose = require("mongoose");
const User = require("./models/User");

const userRoutes =
require("./routes/userRoutes");
app.use("/api/users", userRoutes);

//mood 
const moodRoutes = require("./routes/moodRoutes");
app.use("/api/moods", moodRoutes);

//journal
const journalRoutes = require("./routes/journalRoutes");
app.use("/api/journals", journalRoutes);

//dashboard
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/api/dashboard", dashboardRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");
    console.log("Database:", mongoose.connection.name);

    /*const user = await User.create({
      name: "Sneha",
      email: "sai@gmail.com",
      password:"admin123"
    });

    console.log("User Created:", user);*/
  })
  .catch(err => console.log(err));


app.use(express.json());

app.get("/", (req, res) => {
  res.send("LifeOS API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

  