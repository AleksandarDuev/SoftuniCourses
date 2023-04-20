function solution() {
  const input = document.querySelector("input");
  const addBtn = document.querySelector("button");
  const listOfGifts = document.querySelector(
    ".container > section:nth-of-type(2) ul"
  );
  const sentGifts = document.querySelector(
    ".container > section:nth-of-type(3) ul"
  );
  const discardedGifts = document.querySelector(
    ".container > section:nth-of-type(4) ul"
  );

  addBtn.addEventListener("click", (event) => {
    const liElement = e("li", `${input.value}`, "gift");
    const sendBtn = e("Button", "Send");
    sendBtn.id = "sendButton";
    const discardBtn = e("Button", "Discard");
    discardBtn.id = "discardButton";

    liElement.appendChild(sendBtn);
    liElement.appendChild(discardBtn);
    listOfGifts.appendChild(liElement);

    //sort
    Array.from(listOfGifts.querySelectorAll("li"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((element) => listOfGifts.appendChild(element));

    // clear input field
    input.value = "";

    sendBtn.addEventListener("click", (event) => {
      event.preventDefault();
      liElement.removeChild(sendBtn);
      liElement.removeChild(discardBtn);
      sentGifts.appendChild(liElement);
    });

    discardBtn.addEventListener("click", (event) => {
      event.preventDefault();
      liElement.removeChild(sendBtn);
      liElement.removeChild(discardBtn);
      discardedGifts.appendChild(liElement);

    })
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
