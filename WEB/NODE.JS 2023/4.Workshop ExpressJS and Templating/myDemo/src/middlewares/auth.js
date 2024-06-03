const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");

const auth = async (req, res, next) => {
    const token = req.cookies["auth"];

    if (token) {
        try {
            const user = await jwt.verify(token, SECRET);

            req.user = user;
            //res.local.user = token;
            res.locals.isAuthenticated = true;

            next();
        } catch (error) {
            res.clearCookie("auth");
            return res.redirect("/users/login");
        }
    } else {
        next();
    }
};

module.exports = auth;
