const router = require("express").Router();
const { set } = require("mongoose");
const userService = require("../services/userService");

router.get("/register", (req, res) => {
    res.render("auth/registerPage");
});

router.post("/register", async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    await userService.register({ username, password, repeatPassword });

    //console.log(username, password, repeatPassword);
    res.redirect("/users/login");
});

router.get("/login", (req, res) => {
    res.render("auth/loginPage");
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const token = await userService.login(username, password);

    //console.log(token);

    res.cookie("auth", token, { httpOnly: true }); // set cookie

    res.redirect("/");
});

router.get("/logout", async (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
});

module.exports = router;
