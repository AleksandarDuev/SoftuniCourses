const app = require("express")();
const handleBars = require("express-handlebars");
const hbs = handleBars.create({
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

let visitors = 0;
const products = [
  { name: "chair", price: 20 },
  { name: "sofa", price: 50 },
  { name: "table", price: 35, promoted: true },
];

app.get("/", (req, res) => {
  res.locals = {
    count: visitors++,
    user : {
      username:'peter',
      email:'peter@abv.bg'
    }
  };
  res.render("Home");
});

app.get("/catalog", (req, res) => {
  res.locals = {
    products,
  };
  res.render("Catalog");
});

app.listen(3000);
