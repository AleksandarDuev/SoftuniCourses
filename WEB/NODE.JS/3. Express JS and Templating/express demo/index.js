const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(201, "Hello Express!");
});

app.get("/catalog", (req, res) => {
  res.send("Catalog page");
});

app.get("/catalog/:productId", (req, res) => {
  
  res.send("Product page");
});


app.all("/about", (req, res) => {  // app.all хваща всички методи.
res.send('Matching all request methods' + req.method)
});


app.all("*", (req, res) => {   // *- хваща всички пътища!
  res.send(404, "Not Found");
});

app.listen(3000, () => console.log("Server listening on port 3000"));
