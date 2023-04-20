window.addEventListener("load", solve);

function solve() {
  const fields = document.querySelectorAll(".container-text input");
  const allHits = document.querySelector(".all-hits-container");
  const savedHits = document.querySelector(".saved-container");
  const totalLikes = document.querySelector(".likes");
  const addBtn = document.getElementById("add-btn");

  const input = {
    genre: fields[0],
    songName: fields[1],
    author: fields[2],
    date: fields[3],
  };

  addBtn.addEventListener("click", onclick);

  function onclick(event) {
    event.preventDefault();
    const genre = input.genre.value.trim();
    const name = input.songName.value.trim();
    const author = input.author.value.trim();
    const date = input.date.value.trim();
    if (genre == "" || name == "" || author == "" || date == "") {
      return;
    }
    const divEl = e("div", "", "hits-info");
    const imgEl = e("img", './static/img/img.png');
    const genreEl = e("h2", `Genre:${genre}`);
    const nameEl = e("h2", `Name:${name}`);
    const authorEl = e("h2", `Author:${author}`);
    const dateEl = e("h3", `Date:${date}`);
    const saveBtn = e("button", "Save song", "save-btn");
    const likeBtn = e("button", "Like song", "like-btn");
    const delBtn = e("button", "Delete", "delete-btn");

    divEl.appendChild(imgEl);
    divEl.appendChild(genreEl);
    divEl.appendChild(nameEl);
    divEl.appendChild(authorEl);
    divEl.appendChild(dateEl);
    divEl.appendChild(saveBtn);
    divEl.appendChild(likeBtn);
    divEl.appendChild(delBtn);

    allHits.appendChild(divEl);

    input.genre.value = "";
    input.songName.value = "";
    input.author.value = "";
    input.date.value = "";

    likeBtn.addEventListener("click", onLike);
    function onLike(event) {
      let pEl = totalLikes.querySelector("p").textContent;
      let newLikes = Number(pEl.slice(-1)) + 1;
      totalLikes.querySelector("p").textContent =
        pEl.substr(0, pEl.length - 1) + newLikes;
      likeBtn.disabled = true;
    }

    saveBtn.addEventListener("click", onSave);
    function onSave(event) {
      event.preventDefault();
      divEl.removeChild(saveBtn);
      divEl.removeChild(likeBtn);
      savedHits.appendChild(divEl);
    }
    delBtn.addEventListener("click", onDelete);
    function onDelete(event) {
      event.preventDefault();
      let divForDelete = delBtn.parentNode;
      delBtn.parentNode.parentNode.removeChild(divForDelete);
    }
  }

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
