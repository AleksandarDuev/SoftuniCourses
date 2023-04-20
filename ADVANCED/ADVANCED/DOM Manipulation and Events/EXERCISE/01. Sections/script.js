function create(words) {
  // create div;
  // create p;
  // configure p to be hidden;  display: none;
  // add p to div;
  // add div to page;
  // configer eventListener to div; on click;
  // set p content;

  //   const content = document.getElementById("content"); // -> take the element where to add;

  //   for (let word of words) {
  //     const div = document.createElement("div");
  //     const par = document.createElement("p");
  //     par.textContent = word;
  //     par.style.display = "none"; // -> makes content invisible!
  //     div.appendChild(par);
  //     div.addEventListener("click", reveal);
  //     content.appendChild(div);
  //   }
  //   function reveal(ev) {
  //     ev.target.children[0].style.display = "";
  //   }

  const content = document
    .getElementById("content")
    .addEventListener("click", reveal); // delegation, event listener goes to parrent!

  for (let word of words) {
    const div = document.createElement("div");
    const par = document.createElement("p");
    par.textContent = word;
    par.style.display = "none"; // -> makes content invisible!
    div.appendChild(par);
    content.appendChild(div);
  }
  function reveal(ev) {
    if (ev.target.tagName == "DIV" && ev.target !== content) {
      ev.target.children[0].style.display = "";
    }
  }
}
