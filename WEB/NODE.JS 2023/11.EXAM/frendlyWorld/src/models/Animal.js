const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, "name must be at least 2 characters"],
    },
    years: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
    },
    kind: {
        type: String,
        required: true,
        minLength: [3, "kind must be at least 3 characters"],
    },
    image: {
        type: String,
        required: true,
        match: [/^https?:\/\//, "invalid url"],
    },
    needs: {
        type: String,
        required: true,
        minLength: [3, "needs must be at least 3 characters"],
        maxLength: [20, "needs must be at most 20 characters"],
    },
    location: {
        type: String,
        required: true,
        minLength: [5, "location must be at least 5 characters"],
        maxLength: [15, "location must be at most 15 characters"],
    },
    description: {
        type: String,
        required: true,
        minLength: [5, "description must be at least 5 characters"],
        maxLength: [50, "description must be at most 50 characters"],
    },
    donations: [mongoose.Types.ObjectId],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
