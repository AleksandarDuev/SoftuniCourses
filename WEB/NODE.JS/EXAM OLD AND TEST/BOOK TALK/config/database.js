const mongoose = require("mongoose");
require("../models/User");
require("../models/Book");

const dbName = "bookTalk";

const connectionString = `mongodb://localhost:27017/${dbName}`;

module.exports = async (app) => {
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
    mongoose.connection.on("error", (err) => {
      console.error("Database error");
      console.error(err);
    });
  } catch (err) {
    console.error("Error connecting to database");
    process.exit(1);
  }
};
