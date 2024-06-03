const Accessory = require("../models/Accessory");

exports.getAll = () => Accessory.find();

exports.createAccessory = (accessoryData) => Accessory.create(accessoryData);

exports.getUnused = (accessoryIds) =>
  Accessory.find({ _id: { $nin: accessoryIds } }); // Намери id, което не се съдържа в масива
