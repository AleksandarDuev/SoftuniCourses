const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const auth = require("../middlewares/auth")

function expressConfig(app) {
  app.use(express.static(path.resolve(__dirname, "../public"))); //if absolute path is needed!
  app.use(express.urlencoded({ extended: false })); // body parser
  app.use(cookieParser());
  app.use(auth)
}

module.exports = expressConfig;
