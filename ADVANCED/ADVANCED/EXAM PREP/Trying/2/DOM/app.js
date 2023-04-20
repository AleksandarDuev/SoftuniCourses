

function solve() {
  const creator = document.getElementById("creator");
  const title = document.getElementById("title");
  const category = document.getElementById("category");
  const content = document.getElementById("content");
  const createBtn = document.getElementsByClassName("btn create")[0];
  const articleSection = document.querySelector("main section");

  createBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const article = e("article", "", "");
    const newTitle = e("h1", `${title.value}`, "");
    const paragraph = e("p", "Category:", "");
    const strong = e("strong", `${category.value}`, "");
    const newCreator = e("p", "Creator:", "");
    const strong1 = e("strong", `${creator.value}`, "");
    const NewContent = e("p", `${content.value}`, "");
    const div = e("div", "", "buttons");
    const delBtn = e("button", "Delete", "btn delete");
    const archiveBtn = e("button", "Archive", "btn archive");

    paragraph.appendChild(strong);
    newCreator.appendChild(strong1);
    div.appendChild(delBtn);
    div.appendChild(archiveBtn);

    article.appendChild(newTitle);
    article.appendChild(paragraph);
    article.appendChild(newCreator);
    article.appendChild(NewContent);
    article.appendChild(div);

    articleSection.appendChild(article);

    creator.value = "";
    title.value = "";
    category.value = "";
    content.value = "";

    archiveBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const archiveSection = document.querySelector(".archive-section ol");

      const li = e("li", `${newTitle.textContent}`);

      archiveSection.appendChild(li);

      article.remove();
      let allRecords = Array.from(archiveSection.querySelectorAll("li"));
      
      const sorted = allRecords.sort((a, b) => a.innerText.localeCompare(b.innerText))
      sorted.forEach(record => archiveSection.appendChild(record))
    });

    delBtn.addEventListener("click", (event) => {
      event.preventDefault();
      article.remove();
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
