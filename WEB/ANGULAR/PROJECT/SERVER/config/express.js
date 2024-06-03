const express = require("express");
const session = require("express-session");

module.exports =(app) =>{
    app.use("/static/", express.static("static"));

    app.use(
      session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: {
          secure: "auto",
        },
      })
    );
  
    app.use(express.json({limit: '10mb'}));
    app.use(express.urlencoded({ extended: true, limit: '10mb' }));
    // app.use(express.urlencoded({extended:true}))
}