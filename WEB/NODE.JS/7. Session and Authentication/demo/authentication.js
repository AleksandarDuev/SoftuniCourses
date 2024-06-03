const express = require("express");

const expressSession = require("express-session");
const auth = require("./auth");

const app = express();
const users = {
  'peter': {
    password:'123',
  
  }
};

app.use(express.urlencoded({extended: true}));       //express body parser

app.use(
  expressSession({
    secret: "supersecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
  })
);
app.use(auth())

app.get("/", (req, res) => {
  console.log(req.session.user);
  res.sendFile(
    __dirname +'/index.html'
  );
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname +'/login.html')
});
app.post("/login", (req, res) => {

  if(req.auth.login(req.body.username, req.body.password)) {
    res.redirect('/')
  }else{
    res.status(401).send('Invalid username or password')
  }
  
  
})

app.get("/register", (req, res) => {
  res.sendFile(__dirname +'/register.html')
});

app.post("/register", (req, res) => {
  if(req.auth.register(req.body.username, req.body.password)){
    res.redirect('/');
  }else{
    res.status(409).send('Username already exists')
  }
  });

app.listen(3000);
