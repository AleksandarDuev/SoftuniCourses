const http = require("http");
const fs = require("fs");
const { get, post, match } = require("./src/router");
const { home } = require("./src/controllers/home");
const { catalog, createGet, createPost } = require("./src/controllers/catalog");

get('/', home );
get('/catalog', catalog);
get('/create', createGet);
post('/create', createPost);

http
  .createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      fs.createReadStream(`../demo3/static/favicon.ico`).pipe(res);
    }else if(req.url.startsWith("/public/")){
        fs.createReadStream(`../demo3/static/${req.url.slice(8)}`).pipe(res);
    }
    else{
        match(req, res);
    }
  })
  .listen(3000);

// generate html from layout;
// routing to controllers;
// data storages;
// CRUD from page form;