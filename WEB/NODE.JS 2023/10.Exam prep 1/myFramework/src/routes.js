const router = require("express").Router();
//TODO: add controller routes
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");

router.use("/", homeController);
router.use("/users", userController);
//add other routes before 404

router.use('*',(req, res) => {
    res.redirect('/404')
})

module.exports = router;
