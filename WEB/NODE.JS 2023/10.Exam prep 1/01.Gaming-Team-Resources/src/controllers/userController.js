const router = require("express").Router();
const userService = require("../services/userService");
const { TOKEN_KEY } = require("../config/config");
const { getErrorMessage } = require("../utils/errorHelpers");

//login
router.get("/login", (req, res) => {
    res.render("login");
});
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userService.login(email, password);
        res.cookie(TOKEN_KEY, token);
        //redirect according exam
        res.redirect("/");
    } catch (error) {
        res.render("login", { error: getErrorMessage(error) });
    }
});

//register
router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        const token = await userService.register({
            username,
            email,
            password,
            repeatPassword,
        });
        res.cookie(TOKEN_KEY, token);

        console.log(res.cookie);
        res.redirect("/");
    } catch (error) {
        res.render("register", { error: getErrorMessage(error) });
    }
});

//logout
router.get("/logout", (req, res) => {
    res.clearCookie(TOKEN_KEY);
    //redirect according exam
    res.redirect("/");
});

module.exports = router;
