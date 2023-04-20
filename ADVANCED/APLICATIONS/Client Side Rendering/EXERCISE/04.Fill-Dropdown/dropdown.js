import { html, render } from "./node_modules/lit-html/lit-html.js";

const selectTemplate = (items) => html` 
<select id="menu">
  ${items.map(i => {
      return html`<option value=${i._id}>${i.text}</option>`;
  })}
</select>`;

// start:
//-- add EventListeners;
//-- call getData;
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const root = document.querySelector("div");
document.querySelector('form').addEventListener("submit", addItem);
getData();

// const result = selectTemplate([{ text: "Varna", _id: "3215" }]);
// render(result, document.querySelector("div"));

//getData():
//--//-- fetch and parse data;
//-- call update;
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  update(Object.values(data)); // (data comes as a object, but we need array)!
}

//update():
//-- render template;
function update(items) {
  const result = selectTemplate(items);
  render(result, root);
}

// add item:
//-- read the input;
//-- post it on server;
//-- on success, call getData;
async function addItem(event) {
  event.preventDefault();
  const text = document.getElementById("itemText").value;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'content-Type': "application/json",
    },
    body: JSON.stringify({text})       // needs to be an object;
  });
  if(response.ok){
      getData();
  }
}
