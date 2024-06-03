const router = require("express").Router();
const animalService = require("../services/animalService");

router.get("/", async (req, res) => {
    const animals = await animalService.getAll().lean();

    const newAnimals = animals.reverse();

    res.render("home", { newAnimals });
});

router.get("/404", (req, res) => {
    res.render("404");
});

module.exports = router;
