const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: [2, "name must be at least 2 characters long"],
    },

    image: {
        type: String,
        required: true,
        match: [/^https?:\/\//, "invalid url"],
    },

    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
    },

    description: {
        type: String,
        required: true,
        minLength: [5, "description must be at least 5 characters long"],
        maxLength: [50, "description must be at most 50 characters long"],
    },

    location: {
        type: String,
        required: true,
        minLength: [5, "description must be at least 5 characters long"],
        maxLength: [50, "description must be at most 50 characters long"],
    },

    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },

    comments: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                required: true,
                ref: "User",
            },
            comment: {
                type: String,
                required: [true, "common message is required"],
            },
        },
    ],
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
