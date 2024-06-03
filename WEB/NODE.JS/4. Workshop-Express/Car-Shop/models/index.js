const mongoose = require("mongoose");
const Car = require("./Car");
const Accessory = require("./Accessory");


const connectionString = "mongodb://localhost:27017/carbicle"; //carbicle == db name

async function init() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected");

    mongoose.connection.on("error", (err) => {
      console.error("database error");
      console.error(err);
    });
  } catch (err) {
    console.error("Error connecting to database");
    process.exit(1); // killing the app
  }
}

module.exports = init;
