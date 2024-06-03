const router = require("express").Router();
const photoService = require("../services/photoService"); //needed to take image by owner
const { isAuthorized } = require("../middlewares/auth"); // put it where is forbidden for not logged users

router.get("/", (req, res) => {
    //console.log(req.user); to check auth middleware
    res.render("home");
});

router.get("/404", (req, res) => {
    res.render("404");
});

//profile
router.get("/profile", isAuthorized, async (req, res) => {
    const photos = await photoService.getByOwner(req.user._id).lean();
    console.log(photos);
    const photoCount = photos.length;

    res.render("profile", { photos, photoCount });
});

module.exports = router;
