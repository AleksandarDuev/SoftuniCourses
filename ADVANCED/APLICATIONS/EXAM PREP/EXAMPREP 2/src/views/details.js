import { deleteBook, getBookById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (book, isOwner, onDelete) => html`
  <section id="details-page" class="details">
    <div class="book-information">
      <h3>${book.title}</h3>
      <p class="type">Type: ${book.type}</p>
      <p class="img"><img src="${book.imageUrl}" /></p>
      <div class="actions">
        <!-- Edit/Delete buttons ( Only for creator of this book )  -->
        ${bookControlsTemplate(book, isOwner, onDelete)}
      </div>
    </div>
    <div class="book-description">
      <h3>Description:</h3>
      <p>${book.description}</p>
    </div>
  </section>
`;

const bookControlsTemplate = (book, isOwner, onDelete) => {
  if (isOwner) {
    return html`
      <a class="button" href="/edit/${book._id}">Edit</a>
      <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>
    `;
  } else {
    return null;
  }
};

export async function detailsPage(ctx) {
  const book = await getBookById(ctx.params.id);

  const userData = getUserData();
  const isOwner = userData && userData.id == book._ownerId;

  ctx.render(detailsTemplate(book, isOwner, onDelete));
  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this book?");

    if (choice) {
      await deleteBook(ctx.params.id);
      ctx.page.redirect("/");
    }
  }
}
