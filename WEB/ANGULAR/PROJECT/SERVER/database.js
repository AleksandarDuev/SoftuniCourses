const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/onlineShop";

module.exports = async (app) => {
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
    console.log("Database error");
    process.exit(1);
  }
};
