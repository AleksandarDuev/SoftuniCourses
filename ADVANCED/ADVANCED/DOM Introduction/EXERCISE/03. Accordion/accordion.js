function toggle() {
  let button = document.querySelector(".button");
  button.textContent = button.textContent === "More" ? "Less" : "More";

  let element = document.getElementById("extra");
  element.style.display =
    element.style.display === "none" || element.style.display === ""
      ? (element.style.display = "block")
      : (element.style.display = "none");
}
