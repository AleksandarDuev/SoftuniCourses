import { html, render } from "./node_modules/lit-html/lit-html.js";

// on submit:
// - parse input value;

const div = document.getElementById("root");
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const towns = document
    .getElementById("towns")
    .value.split(",")
    .map((town) => town.trim());
  const result = townsTemplate(towns);
  render(result, div);
});
// template:
// -ul li for every list item;
const townsTemplate = (towns) => html`
  <ul>
    ${towns.map((town) => html`<li>${town}</li>`)}
  </ul>
`;

// - render the result;
