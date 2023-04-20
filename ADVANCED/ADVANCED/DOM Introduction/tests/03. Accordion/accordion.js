function toggle() {
  let btn = document.querySelector(".button");
  if (btn.textContent === "More") {
    btn.textContent = "Less";
  } else {
    btn.textContent = "More";
  }
  let field = document.getElementById("extra");
  if ((field.style.display === "" || field.style.display === "none")) {
    field.style.display = "block"
  } else {
    field.style.display = "none";
  }
}
