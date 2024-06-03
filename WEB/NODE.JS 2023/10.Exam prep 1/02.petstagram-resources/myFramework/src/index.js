const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const routes = require("./routes");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { auth } = require("./middlewares/auth");
//const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

//connect mongoose

//TODO: change dbName
mongoose
    .connect("mongodb://127.0.0.1:27017/petstagram")
    .then(console.log("Db connected successfully"))
    .catch((err) => console.log("Db error", err.message));

//setup handlebars
app.engine(
    "hbs",
    handlebars.engine({
        extname: "hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(cookieParser());
app.use(auth);
app.use(routes);
//app.use(errorHandler);

app.listen(3000, () => console.log("server listening on port 3000..."));
