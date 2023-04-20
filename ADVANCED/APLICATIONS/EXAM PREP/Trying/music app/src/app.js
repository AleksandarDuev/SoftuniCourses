import { logout } from "./api/api.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";

import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { searchPage } from "./views/search.js";

// import * as api from './api/data.js'
// window.api = api;

const root = document.getElementById("main-content");
document.getElementById("logoutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/", homePage);
page('/catalog', catalogPage)
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', searchPage)

page.start();

function decorateContext(ctx, next) {
  //universal middle wear
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;
  next();
}

async function onLogout() {
    await logout();
    updateUserNav();
    page.redirect("/");
  }


function updateUserNav() {
    const userData = getUserData();
  
    if (userData) {
      document.getElementById("user").style.display = "inline";
      document.getElementById("guest").style.display = "none";
      document.getElementById("all").style.display = "inline";
      
    } else {
      document.getElementById("user").style.display = "none";
      document.getElementById("guest").style.display = "inline";
      document.getElementById("all").style.display = "inline";
    }
  };