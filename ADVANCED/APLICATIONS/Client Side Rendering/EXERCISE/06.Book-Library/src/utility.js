import { html, render } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
export { html, render, until };

//api module:
//--load all books;
//--edit book;
//--delete book;
//--create book;
const host = "http://localhost:3030/jsonstore/collections";

async function request(url, method = "GET", data) {
  const options = {
    method,
    headers: {},
  };
  if (data !== undefined) {
    options.headers["content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  const response = await fetch(host + url, options);
  if (response.ok == false) {
    const error = await response.json();
    alert(error.message);
    throw new Error(error.message);
  }
  return response.json();
}

export async function getBooks() {
  return request("/books");
}

export async function getById(id) {
  return request("/books/" + id);
}

export async function createBook(book) {
  return request("/books/", "post", book);
}

export async function updateBook(id, book) {
  return request("/books/" + id, "put", book);
}

export async function deleteBook(id) {
  return request("/books/" + id, "delete");
}
