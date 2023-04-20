window.addEventListener("load", solve);

function solve() {
  const typeField = document.getElementById("type-product");
  const descriptionField = document.getElementById("description");
  const nameField = document.getElementById("client-name");
  const phoneField = document.getElementById("client-phone");
  const sendBtn = document.querySelector("button");

  const receivedSection = document.getElementById("received-orders");
  const completedSection = document.getElementById("completed-orders");
  const clearBtn = document.querySelector(".clear-btn");

  sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      descriptionField.value == "" ||
      nameField.value == "" ||
      phoneField.value == ""
    ) {
      return;
    }

    let product = "Computer";
    
    if (typeField.value == "Computer") {
      product = "Computer";
    } else {
      product = "Phone";
    }

    const div = e("div", "", "container");
    const h2 = e("h2", `Product type for repair: ${product}`, "");
    const h3 = e(
      "h3",
      `Client information: ${nameField.value}, ${phoneField.value}`,
      ""
    );
    const h4 = e(
      "h4",
      `Description of the problem: ${descriptionField.value}`,
      ""
    );
    const startBtn = e("button", "Start repair", "start-btn");
    const finishBtn = e("button", "Finish repair", "finish-btn");

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(startBtn);
    div.appendChild(finishBtn);

    receivedSection.appendChild(div);

    descriptionField.value = "";
    nameField.value = "";
    phoneField.value = "";

    finishBtn.disabled = true;

    startBtn.addEventListener("click", (event) => {
      event.preventDefault();
      startBtn.disabled = true;
      finishBtn.disabled = false;
    });
    finishBtn.addEventListener("click", (event) => {
      event.preventDefault();
      div.removeChild(startBtn);
      div.removeChild(finishBtn);

      completedSection.appendChild(div);
    });
    clearBtn.addEventListener("click", (event) => {
      event.preventDefault();
      completedSection.removeChild(div);
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

