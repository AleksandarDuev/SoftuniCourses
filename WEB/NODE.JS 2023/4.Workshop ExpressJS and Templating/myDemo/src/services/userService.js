const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("Cannot find username or password");
  }
  const isValid = await bcrypt.compare(password, user.password);

  const payload = {
    _id: user._id,
    username: username,
  };

  const token = jwt.sign(payload, SECRET, { expiresIn: "2days" });

  if (!isValid) {
    throw new Error("Cannot find username or password");
  }
  return token;
};