const handlebars = require("express-handlebars");

function hbsConfiguration(app) {
  //hbs config
  app.engine(
    "hbs",
    handlebars.engine({
      extname: "hbs",
    })
  );
  app.set("view engine", "hbs");
  app.set("views", "src/views");
}

module.exports = hbsConfiguration;