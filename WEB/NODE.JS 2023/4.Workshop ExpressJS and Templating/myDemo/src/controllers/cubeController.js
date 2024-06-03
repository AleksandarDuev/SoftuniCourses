const router = require("express").Router();

const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");

const getDifficultyLevel = require("../utils/viewHelpers");

//PATH : /cubes/create
router.get("/create", (req, res) => {
    //cubeService.getAllCubes();
    res.render("cube/create");
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    await cubeService.createCube({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
        owner: req.user._id,
    });

    res.redirect("/");
});

// details
router.get("/:cubeId/details", async (req, res) => {
    const cube = await cubeService
        .getOneWithAccessories(req.params.cubeId)
        .lean();

    if (!cube) {
        return res.render("404");
    }
    if (cube.owner) {
        const isOwner = cube.owner == req.user?._id;
        res.render("cube/details", { cube, isOwner });
    }

    res.render("cube/details", { cube });
});

// edit
router.get("/:cubeId/edit", async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const options = getDifficultyLevel(cube.difficultyLevel);

    res.render("cube/editCube", { cube, options });
});

router.post("/:cubeId/edit", async (req, res) => {
    const cubeData = req.body;

    await cubeService.updateCube(req.params.cubeId, cubeData);
    res.redirect(`/cubes/${req.params.cubeId}/details`);
});

//delete
router.get("/:cubeId/delete", async (req, res) => {
    //console.log(req.params.cubeId, "get");
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const options = getDifficultyLevel(cube.difficultyLevel);

    res.render("cube/deleteCube", { cube, options });
});

router.post("/:cubeId/delete", async (req, res) => {
    await cubeService.deleteCube(req.params.cubeId);
    //console.log(req.params.cubeId, "post");

    res.redirect("/");
});

//cubeAccessories
router.get("/:cubeId/attach-accessory", async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();

    const accessories = await accessoryService
        .getUnused(cube.accessories)
        .lean();
    const hasAccessories = accessories.length > 0;

    res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", async (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.cubeId;

    await cubeService.attachAccessory(cubeId, accessoryId);
    res.redirect(`/cubes/${cubeId}/details`);
});

module.exports = router;
