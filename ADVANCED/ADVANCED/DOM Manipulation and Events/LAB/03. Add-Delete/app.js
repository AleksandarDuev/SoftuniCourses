function addItem() {
  let input = document.getElementById("newItemText");
  let liElement = document.createElement("li");
  liElement.textContent = input.value;
  let button = document.createElement("a"); // a = anchor type element!
  button.href = "#";
  button.textContent = "[Delete]";
  button.addEventListener("click", removeElement);
  liElement.appendChild(button);
  document.getElementById("items").appendChild(liElement);
  input.value = "";
  function removeElement(ev) {
    let parent = ev.target.parentNode;
    parent.remove();
  }
}
