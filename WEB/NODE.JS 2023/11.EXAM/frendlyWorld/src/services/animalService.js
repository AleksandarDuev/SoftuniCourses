const Animal = require("../models/Animal");

exports.create = (animalData) => Animal.create(animalData);

exports.getAll = () => Animal.find().populate("owner");

exports.getOne = (animalId) => Animal.findById(animalId).populate("owner");

exports.updateAnimal = (animalId, animalData) =>
    Animal.findByIdAndUpdate(animalId, animalData);

exports.deleteAnimal = (animalId) => Animal.findByIdAndDelete(animalId);

exports.donate =  (animalId, userId) => {
    
    const animal =  Animal.findById(animalId);

    Animal.donations.push(userId);

    return Animal.save();
};
