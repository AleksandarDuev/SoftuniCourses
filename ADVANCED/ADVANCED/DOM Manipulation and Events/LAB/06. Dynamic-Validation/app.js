function validate() {
  document.getElementById("email").addEventListener("change", onCahnge);

  function onCahnge({ target }) {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    if (pattern.test(target.value)) {
      target.classList.remove("error");
    } else {
      target.classList.add("error");
    }
  }
}
