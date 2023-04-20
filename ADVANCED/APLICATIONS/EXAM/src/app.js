import { page, render } from "./lib.js";
import * as api from "./api/data.js";
import { homePage } from "./views/home.js";
import { catalogPage } from "./views/catalog.js";
import { loginPage } from "./views/login.js";
import { getUserData } from "./utill.js";

// window.api = api;

const root = document.getElementById("main-content");

page(decorateContext);
page("/", homePage);
page("/albums", catalogPage);
page("/login", loginPage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
  //universal middle wear
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;
  next();
}

function updateUserNav() {
  const userData = getUserData();

  if (userData) {
    document.getElementById("user").style.display = "block";
    document.getElementById("guest").style.display = "none";
    
  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById(".guest").style.display = "block";
  }
}
