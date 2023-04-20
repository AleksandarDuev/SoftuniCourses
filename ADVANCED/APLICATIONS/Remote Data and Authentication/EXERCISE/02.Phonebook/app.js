function attachEvents() {
  document.getElementById("btnLoad").addEventListener("click", loadContacts);
  document.getElementById("btnCreate").addEventListener("click", onCreate);

  list.addEventListener("click", onDelete);

  loadContacts(); // loading the list of contacts with the start of the page!!
}

const list = document.getElementById("phonebook");
const personField = document.getElementById("person");
const phoneField = document.getElementById("phone");

attachEvents();

async function onDelete(event) {
  const id = event.target.dataset.id;
  if (id != undefined) {
    await deleteContact(id);
    event.target.parentElement.remove();
  }
}

async function onCreate() {
  const person = personField.value;
  const phone = phoneField.value;
  const contact = { person, phone };

  const result = await createContact(contact);
  list.appendChild(createElement(result));
}
async function loadContacts() {
  const response = await fetch(`http://localhost:3030/jsonstore/phonebook`);
  const data = await response.json();
  list.replaceChildren(...Object.values(data).map(createElement)); // cleaning the list and load the new contacts

  return data;
}
function createElement(contact) {
  const liElement = document.createElement("li");
  liElement.innerHTML = `${contact.person}: ${contact.phone} <button data-id ="${contact._id}">Delete</button>`;
  return liElement;
}

async function createContact(contact) {
  const url = `http://localhost:3030/jsonstore/phonebook`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}

async function deleteContact(id) {
  const response = await fetch(
    `http://localhost:3030/jsonstore/phonebook/${id}`,
    {
      method: "delete",
    }
  );
  const result = await response.json();
  return result;
}
