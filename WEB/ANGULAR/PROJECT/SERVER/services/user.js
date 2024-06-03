const User = require("../models/user");
const { hash, compare } = require("bcrypt");

async function register(email, password) {
  const existing = await getByEmail(email);

  if (existing) {
    throw new Error("User already registered");
  }

  const hashedPassword = await hash(password, 10);

  const user = new User({ email, hashedPassword });
  await user.save();

  return user;
}

async function login(email, password) {
  const user = await getByEmail(email);
  if (!user) {
    throw new Error("User doesn't exist");
  }

  const hasMatch = await compare(password, user.hashedPassword);
  if (!hasMatch) {
    throw new Error("Incorrect password");
  }

  return user;
}

async function getByEmail(email) {
  const user = await User.findOne({ email });

  return user;
}

module.exports ={
    login, 
    register
};
