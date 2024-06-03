const express = require("express");
//const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

const app = express();

const sessions = {};

// function mySession(req, res, next) {
//   const cookies = (req.headers.cookie || "")
//     .split(";")
//     .map((t) => t.trim())
//     .map((t) => t.split("="))
//     .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
//   console.log(cookies);
//   let user = sessions[cookies.sessionId];

//   if (user === undefined) {
//     const newId = ("000000" + (Math.random() * 999999).toString(16)).slice(-6);
//     user = {
//       visited: 1,
//     };
//     sessions[newId] = user;
//     res.setHeader("Set-cookie", `sessionId=${newId}; httpOnly`);
//   } else {
//     user.visited++;
//   }
//   req.session = user;
//   next();
// }
//app.use(mySession);
//app.use(cookieParser());

app.use(
  expressSession({
    secret: "supersecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
  })
);

app.get("/", (req, res) => {
  //console.log(req.cookies);
  //res.cookie('CookieParser_Cookie', 'hello')   // set (cookie, value)
  if (req.session.visited) {
    req.session.visited++;
  } else {
    req.session.visited = 1;
  }
  res.send(
    `<p>Hello</p><p>You have visited this page ${req.session.visited} times</p>`
  );
});

app.listen(3000);
