const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
});

const Furniture = mongoose.model("Furniture", furnitureSchema);

module.exports = Furniture;
