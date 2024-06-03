const router = require("express").Router();
const AccessoryService = require("../services/accessoryService");

router.get("/create", (req, res) => {
  res.render("accessory/createAccessory");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl } = req.body;

  await AccessoryService.createAccessory({ name, description, imageUrl });

  res.redirect("/");
});
module.exports = router;
