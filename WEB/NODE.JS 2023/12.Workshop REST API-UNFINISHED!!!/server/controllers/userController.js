const router = require("express").Router();
const userManager = require("../services/userService");

router.post("/post", async (req, res) => {
    try {
        console.log(req.body);
        const user = userManager.register(req.body);
        res.json({
            email: user.email,
            authToken: 'nqma token za sega',
            userId: user._id,
        });
       
    
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

module.exports = router;
