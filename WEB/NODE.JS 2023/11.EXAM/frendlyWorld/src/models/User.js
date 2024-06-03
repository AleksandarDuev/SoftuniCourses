const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength:[10,  'email should be at least 10 characters']
    },
    password: {
        type: String,
        required: true,
        minLength:[4,  'password should be at least 10 characters']
    },
});

userSchema.virtual("repeatPassword").set(function (value) {
    if (this.password !== value) {
        throw new Error("Password mismatch");
    }
});

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
