const res = require("express/lib/response");
const { isUser, isGuest } = require("../middleware/guards");
const { register, login } = require("../services/user");
const mapErrors = require("../util/mappers");

const router = require("express").Router();

router.get("/register", isGuest(), (req, res) => {
  res.render("register", { title: "Register Page" });
});

//TODO check form method, action, filed names
router.post("/register", isGuest(), async (req, res) => {
  try {
    if(req.body.password.trim() == ''){
      throw new Error("Password is required")
    }
    else if (req.body.password != req.body.repass) {
      throw new Error("Passwords do not match!");
    }
    
    const user = await register(req.body.email, req.body.username, req.body.password);
    req.session.user = user;
    res.redirect("/"); //TODO: Check redirect requirements
  } catch (err) {
    console.error(err);
    //TODO: Send error messages
    const errors = mapErrors(err);
    res.render("register", {
      title: "Register Page",
      data: { email: req.body.email },
      errors,
    });
  }
});

router.get("/login", isGuest(), (req, res) => {

  res.render("login", { title: "Login Page" });
});

//TODO check form method, action, filed names
router.post("/login", isGuest(), async (req, res) => {
  try {
    const user = await login(req.body.email, req.body.password);
    req.session.user = user;
    res.redirect("/"); //TODO: Check redirect requirements
  } catch (err) {
    console.error(err);
    //TODO: Send error messages
    const errors = mapErrors(err);
    res.render("login", {
      title: "Login Page",
      data: { email: req.body.email },
      errors,
    });
  }
});

router.get("/logout", isUser(), (req, res) => {
  delete req.session.user;
  res.redirect("/");
});

module.exports = router;
