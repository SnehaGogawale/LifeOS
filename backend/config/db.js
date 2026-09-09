const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    isConnected = true;

    console.log("MongoDB Connected");
    console.log("Database:", mongoose.connection.name);
  } catch (error) {
    isConnected = false;
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

module.exports = connectDB;