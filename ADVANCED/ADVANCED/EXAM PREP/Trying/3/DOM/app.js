function solve() {
  const taskField = document.getElementById("task");
  const descriptionField = document.getElementById("description");
  const dateField = document.getElementById("date");
  const addBtn = document.getElementById("add");
  const allSections = Array.from(document.querySelectorAll(".wrapper section"));
  const openSection = allSections[1].lastElementChild;
  const finishSection = allSections[3].lastElementChild;

  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      taskField.value == "" ||
      descriptionField.value == "" ||
      dateField.value == ""
    ) {
      return;
    }

    const newArticle = e("article");
    const newH3 = e("h3", `${taskField.value}`);
    const newP = e("p", `Description: ${descriptionField.value}`);
    const newP1 = e("p", `Due Date: ${dateField.value}`);
    const div = e("div", "", "flex");
    const startBtn = e("button", "Start", "green");
    const delBtn = e("button", "Delete", "red");

    div.appendChild(startBtn);
    div.appendChild(delBtn);

    newArticle.appendChild(newH3);
    newArticle.appendChild(newP);
    newArticle.appendChild(newP1);
    newArticle.appendChild(div);

    openSection.appendChild(newArticle);

    taskField.value = "";
    descriptionField.value = "";
    dateField.value = "";

    startBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const inProgressDiv = document.getElementById("in-progress");
      const deleteBtn = e("button", "Delete", "red");
      const finishBtn = e("button", "Finish", "orange");
      const div1 = e("div", "", "flex");

      div1.appendChild(deleteBtn);
      div1.appendChild(finishBtn);

      newArticle.removeChild(div);
      newArticle.appendChild(div1);
      inProgressDiv.appendChild(newArticle);

      deleteBtn.addEventListener("click", (event) => {
        event.preventDefault();
        newArticle.remove();
      });

      finishBtn.addEventListener("click", (event) => {
        event.preventDefault();
        newArticle.removeChild(div1);
        finishSection.appendChild(newArticle);
      });
    });

    delBtn.addEventListener("click", (event) => {
      event.preventDefault();
      newArticle.remove();
    });
  });
  function e(type, content, className) {
    let element = document.createElement(type);

    if (type === "img") {
      element.src = content;
    } else {
      element.textContent = content;
    }

    if (className) {
      element.className = className;
    }

    return element;
  }
}
