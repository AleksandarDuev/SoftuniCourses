const User = require("../models/User");
const { hash, compare } = require("bcrypt");

//TODO: Add all fields required by the exam
async function register(username, password) {
  const existing = await getUserByUsername(username);
  if (existing) {
    throw new Error("username already exists");
  }

  const hashedPassword = await hash(password, 10);

  const user = new User({
    username,
    hashedPassword,
  });

  await user.save();

  return user;
}

//TODO: Change identifier
async function login(username, password) {
  const user = await getUserByUsername(username);
  if (!user) {
    throw new Error("Incorrect username or password");
  }

  const hasMatch = await compare(password, user.hashedPassword);
  if (!hasMatch) {
    throw new Error("Incorrect username or password");
  }
  return user;
}

//TODO: identify user by given identifier
async function getUserByUsername(username) {
  const user = await User.findOne({ username: new RegExp(`^${username}$`, 'i') }); // case insensitive

  return user;
}

module.exports = {
  login,
  register,
};
