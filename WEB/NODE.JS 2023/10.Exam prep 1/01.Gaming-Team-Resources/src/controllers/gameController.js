const router = require("express").Router();
// const { getErrorMessage } = require("../utils/errorHelpers");
// gameService = require("../services/gameService");
// const { isAuthorized } = require("../middlewares/auth");

router.get("/create", (req, res) => {
    res.render("create");
});

module.exports = router;
