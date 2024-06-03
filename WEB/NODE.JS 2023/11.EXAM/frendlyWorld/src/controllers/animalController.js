const router = require("express").Router();
const { getErrorMessage } = require("../utils/errorHelpers");
const animalService = require("../services/animalService");

const { isAuthorized } = require("../middlewares/auth");

router.get("/create", isAuthorized, (req, res) => {
    res.render("create");
});

router.post("/create", isAuthorized, async (req, res) => {
    const animalData = {
        ...req.body,
        owner: req.user._id,
    };
    try {
        await animalService.create(animalData);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.render("create", { error: getErrorMessage(err) });
    }
});

router.get("/catalog", async (req, res) => {
    const animals = await animalService.getAll().lean();
    res.render("catalog", { animals });
});

router.get("/:id", async (req, res) => {
    const animalId = req.params.id;
    const animal = await animalService.getOne(animalId).lean();
    const isOwner = animal.owner._id == req.user?._id; //for conditional rendering(buttons) in details page

    res.render("details", { animal, isOwner });
});

router.get("/:animalId/edit", isAuthorized, async (req, res) => {
    const animalId = req.params.animalId;

    const animal = await animalService.getOne(animalId).lean();

    res.render("edit", { animal });
});

router.post("/:animalId/edit", isAuthorized, async (req, res) => {
    const animalId = req.params.animalId;
    const animalData = req.body;

    try {
        const animal = await animalService.updateAnimal(animalId, animalData);
        console.log(animal);
        res.redirect(`/animals/${animalId}`);
    } catch (error) {
        res.render("details", { error: "unsuccessful updating" });
    }
});

router.get("/:animalId/delete", isAuthorized, async (req, res) => {
    const animalId = req.params.animalId;
    try {
        await animalService.deleteAnimal(animalId);

        res.redirect("/");
    } catch (error) {
        res.render("details", { error: "unsuccessful deleting" });
    }
});

router.get("/:animalId", isAuthorized, async (req, res) => {
    console.log("1");
    const animalId = req.params.animalId;
    const userId = req.user._id;
    console.log(animalId, userId);
    try {
        await animalService.donate(animalId, userId);
        res.redirect(`/animals/${animalId}`);
    } catch (error) {
        res.render("details", { error: "unsuccessful donation" });
    }
});

module.exports = router;
