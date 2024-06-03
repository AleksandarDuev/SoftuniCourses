const router = require("express").Router();
const { getErrorMessage } = require("../utils/errorHelpers");
photoService = require("../services/photoService");
const {isAuthorized} = require("../middlewares/auth")


//create
router.get("/create",isAuthorized, (req, res) => {
    res.render("create");
});

router.post("/create",isAuthorized, async (req, res) => {
    const photoData = {
        ...req.body,
        owner: req.user._id,
    };

    //{ name, image, description, location }

    try {
        await photoService.create(photoData);
        res.redirect("/photos");
    } catch (err) {
        console.log(err);
        res.render("create", { error: getErrorMessage(err) });
    }
});
//catalog
router.get("/", async (req, res) => {
    const photos = await photoService.getAll().lean();

    res.render("catalog", { photos });
});

//details
router.get("/:id", async (req, res) => {
    const photoId = req.params.id;
    const photo = await photoService
        .getOne(photoId)
        .populate("comments.user")
        .lean();
    const isOwner = photo.owner._id == req.user?._id; //for conditional rendering(buttons) in details page

    res.render("details", { photo, isOwner });
});

//delete
router.get("/:photoId/delete",isAuthorized, async (req, res) => {
    const photoId = req.params.photoId;
    try {
        await photoService.deletePhoto(photoId);

        res.redirect("/photos");
    } catch (error) {
        res.render("details", { error: "unsuccessful deleting" });
    }
});

//edit
router.get("/:photoId/edit",isAuthorized, async (req, res) => {
    const photoId = req.params.photoId;

    const photo = await photoService.getOne(photoId).lean();
    console.log(photo);
    res.render("edit", { photo });
});

router.post("/:photoId/edit",isAuthorized, async (req, res) => {
    const photoId = req.params.photoId;
    const photoData = req.body;
    try {
        const photo = await photoService.updatePhoto(photoId, photoData);
        res.redirect(`/photos/${photoId}`);
    } catch (error) {
        res.render("details", { error: "unsuccessful updating" });
    }
});

//comments
router.post("/:photoId/comments",isAuthorized, async (req, res) => {
    const photoId = req.params.photoId;
    const { comment } = req.body;
    const user = req.user._id;

    try {
        await photoService.addComment(photoId, { user, comment });
        res.redirect(`/photos/${photoId}`);
    } catch (error) {}
});

module.exports = router;
