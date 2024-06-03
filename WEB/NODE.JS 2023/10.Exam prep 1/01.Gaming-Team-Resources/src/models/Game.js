const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    platform: {
        type: String,
        required: true,
        enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"],
    },
    boughtBy: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                required: true,
                ref: "User",
            },
        },
    ],
    
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

// • name: string (required),
// • image: string (required),
// • price: number (required),
// • description: string (required),
// • genre: string (required),
// • platform: string (required; one of the following: "PC", "Nintendo", "PS4", "PS5", "XBOX"),
// • boughtBy: a collection (array) of users (references to the "User" model)
// • owner: object ID (a reference to the "User" model)
