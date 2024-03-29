import {logout} from './api/data.js'
import { showCatalogPage } from './catalog.js';
import { showHomePage, showAboutPage } from './home.js';
import { showLoginPage } from './login.js';
import { showRegisterPage } from './register.js';

document.getElementById('logoutBtn').addEventListener('click', onLogout);
document.querySelector('nav').addEventListener('click', onNavigate);

const sections = {
    'homeBtn': showHomePage,
    'catalogBtn': showCatalogPage,
    'aboutBtn': showAboutPage,
    'loginBtn': showLoginPage,
    'registerBtn': showRegisterPage
};

updateUserNav();

// Start application in home view
showHomePage();

function onNavigate(event) {
    if (event.target.tagName == 'A') {
        const view = sections[event.target.id];
        if (typeof view == 'function') {
            event.preventDefault();
            view();
        }
    }
}

export function updateUserNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        document.getElementById('userNav').style.display = 'inline-block';
        document.getElementById('guestNav').style.display = 'none';
    } else {
        document.getElementById('userNav').style.display = 'none';
        document.getElementById('guestNav').style.display = 'inline-block';
    }
}

async function onLogout(event) {
    event.stopImmediatePropagation();
    
    await logout();
    
    updateUserNav();
    showHomePage();
}