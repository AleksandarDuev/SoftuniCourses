const { Schema, model } = require("mongoose");

// TODO: Change user model according to exam
// TODO: add validation

const userSchema = new Schema({
  username: { type: String, minLength:[4, 'Username must be at least 4 characters long'] },
  email: { type: String, minLength:[10, 'email must be at least 10 characters long'] },
  hashedPassword: { type: String, minLength:[3, 'Password must be at least 3 characters long'] },
});

userSchema.index(
  { email: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
