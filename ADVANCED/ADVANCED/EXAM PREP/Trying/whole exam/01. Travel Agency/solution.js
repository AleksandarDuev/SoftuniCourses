window.addEventListener("load", solution);

function solution() {
  const main = document.getElementById("block");
  const fullNameField = document.getElementById("fname");
  const emailField = document.getElementById("email");
  const phoneNumberField = document.getElementById("phone");
  const addressField = document.getElementById("address");
  const postalCodeField = document.getElementById("code");
  const submitBtn = document.getElementById("submitBTN");

  const previewCard = document.getElementById("infoPreview");
  const editBtn = document.getElementById("editBTN");
  const continueBtn = document.getElementById("continueBTN");

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (fullNameField.value == "" || emailField.value == "") {
      return;
    }
    const nameLi = e("li", `Full Name: ${fullNameField.value}`, "");
    const emailLi = e("li", `Email: ${emailField.value}`, "");
    const phoneLi = e("li", `Phone Number: ${phoneNumberField.value}`, "");
    const addressLi = e("li", `Address: ${addressField.value}`);
    const postalCodeLi = e("li", `Postal Code: ${postalCodeField.value}`, "");

    previewCard.appendChild(nameLi);
    previewCard.appendChild(emailLi);
    previewCard.appendChild(phoneLi);
    previewCard.appendChild(addressLi);
    previewCard.appendChild(postalCodeLi);

    const name = fullNameField.value;
    const email = emailField.value;
    const phone = phoneNumberField.value;
    const address = addressField.value;
    const postalCode = postalCodeField.value;

    fullNameField.value = "";
    emailField.value = "";
    phoneNumberField.value = "";
    addressField.value = "";
    postalCodeField.value = "";

    event.target.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    editBtn.addEventListener("click", (event) => {
      event.preventDefault();

      fullNameField.value = name;
      emailField.value = email;
      phoneNumberField.value = phone;
      addressField.value = address;
      postalCodeField.value = postalCode;

      previewCard.removeChild(nameLi);
      previewCard.removeChild(emailLi);
      previewCard.removeChild(phoneLi);
      previewCard.removeChild(addressLi);
      previewCard.removeChild(postalCodeLi);

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
    });

    continueBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const h3 = e("h3", "Thank you for your reservation!", "");
      main.innerHTML = "";
      main.appendChild(h3);
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
