function solve() {
  let btn = document.querySelector("#searchBtn");
  btn.addEventListener("click", onClick);

  function onClick() {
    let inputField = document.getElementById("searchField");
    let inputText = inputField.value.toLowerCase();
    let students = Array.from(document.querySelectorAll("tbody tr"));

    students.forEach((student) => {
      if (student.textContent.toLowerCase().includes(inputText)) {
        student.classList.add("select");
      } else {
        student.classList.remove("select");
      }
    });
    inputField.value = "";
  }
}
