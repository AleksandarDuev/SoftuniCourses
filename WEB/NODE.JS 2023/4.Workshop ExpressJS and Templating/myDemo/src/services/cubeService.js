const uniqueId = require("uniqid");
const Cube = require("../models/Cube");

exports.getAllCubes = async (search, from, to) => {
  let result = await Cube.find().lean();

  if (search) {
    result = result.filter((cube) =>
      cube.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  if (from) {
    result = result.filter((cube) => cube.difficultyLevel >= Number(from));
  }

  if (to) {
    result = result.filter((cube) => cube.difficultyLevel <= Number(to));
  }

  return result;
};

exports.getOne = (cubeId) => Cube.findById(cubeId); //.lean(); Може тук или в контролера
exports.getOneWithAccessories = (cubeId) =>
  this.getOne(cubeId).populate("accessories"); //takes accessories as objects

exports.createCube = (cubeData) => {
  const cube = new Cube(cubeData);
  return cube.save();
};

exports.updateCube = (cubeId, cubeData) =>
  Cube.findByIdAndUpdate(cubeId, cubeData);

exports.deleteCube = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.attachAccessory = async (cubeId, accessoryId) => {
  // await Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } }); //mongoDB way

  const cube = await Cube.findById(cubeId);
  cube.accessories.push(accessoryId);
  return cube.save();
};
