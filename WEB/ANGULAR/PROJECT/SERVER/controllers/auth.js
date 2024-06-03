const {register, login} = require('../services/user')

const router = require("express").Router();



router.post("/login", (req, res) => {
  
});

router.post("/resister", async (req, res) => {
  if(req.body.password !== req.body.repass){
    throw new Error("Passwords do not match")
  }
  const user = await register(req.body.email, req.body.password)
  req.session.user = user;

  //res.send()??
});

router.post('/login'), async(req, res) => {
  const user = await login(req.body.email, req.body.password)
  req.session.user = user;
}

module.exports = router;
