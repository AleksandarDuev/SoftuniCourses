// initialization;

import { updateNav } from "./app.js";
import { showView } from "./dom.js";
import { showHome } from "./home.js";

// - find relevant section;
const section = document.getElementById("form-login");
const form = section.querySelector("form");
form.addEventListener("submit", onLogin);
// - detach section from DOM;

section.remove();

// visualization logic;
export function showLogin() {
  showView(section);
}

async function onLogin(event) {
  event.preventDefault();
  const formData = new FormData(form);

  const email = formData.get("email").trim();
  const password = formData.get("password").trim();

  try {
    const res = await fetch("http://localhost:3030/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok !== true) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();
    sessionStorage.setItem(
      "userData",
      JSON.stringify({
        email: data.email,
        id: data._id,
        token: data.AccessToken
      }));
    
    form.reset();
    updateNav();
    showHome();
  
} catch (error) {
    alert(error.message);
  }
}
