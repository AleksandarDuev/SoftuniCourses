function attachEvents() {
  // add eventListener to "Load button"
  document.getElementById("refresh").addEventListener("click", loadMessages);
  // add eventListener to "post button"
  document.getElementById("submit").addEventListener("click", onSubmit);

  loadMessages();
}
const authorInput = document.querySelector('[name="author"]');
const contentInput = document.querySelector('[name="content"]');
const messagesList = document.getElementById("messages");
attachEvents();
// function for loading and displaying messages;
async function onSubmit() {
  const author = authorInput.value;
  const content = contentInput.value;
  const result = await createMessage({ author, content });
  contentInput.value = '';
  messagesList.value += '\n' + `${message.author}: ${message.content}`;
}
async function loadMessages() {
  const url = `http://localhost:3030/jsonstore/messenger`;
  const response = await fetch(url);
  const data = await response.json();
  const messages = Object.values(data);

  messagesList.value = messages
    .map((message) => `${message.author}: ${message.content}`)
    .join("\n");
  return messagesList;
}

// function for post messages
async function createMessage(message) {
  const url = `http://localhost:3030/jsonstore/messenger`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}
//function for adding single message to list
