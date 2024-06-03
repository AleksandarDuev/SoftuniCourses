const express = require("express");

const expressConfigurator = require("./config/expressConfig");
const hbsConfigurator = require("./config/hbsConfig");
const dbConnect = require("./config/dbConfig");

const routes = require("./routes")

const app = express();
const port = 5000;


expressConfigurator(app); // express configuration
hbsConfigurator(app); // rendering engine

dbConnect()
.then(() => console.log('DB connected!!!') )
.catch(err =>console.log('DB error',err));

app.use(routes)

app.listen(port, (req, res) => {
  console.log(`server listen on port ${port}`);
});
