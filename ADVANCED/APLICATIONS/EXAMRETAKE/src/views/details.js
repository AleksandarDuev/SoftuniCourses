import { deleteTheatre, getTheatreId } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (theatre, isOwner, onDelete) => html`
  <section id="detailsPage">
    <div id="detailsBox">
      <div class="detailsInfo">
        <h1>Title: ${theatre.title}</h1>
        <div>
          <img src=${theatre.imageUrl} />
        </div>
      </div>

      <div class="details">
        <h3>Theater Description</h3>
        <p>${theatre.description}</p>
        <h4>Date: ${theatre.date}</h4>
        <h4>Author: ${theatre.author}</h4>
        ${isOwner //show buttons only if user is owner of the meme
          ? html`
              <div class="buttons">
                <a
                  class="btn-delete"
                  href="javascript:void(0)"
                  @click="${onDelete}"
                  >Delete</a
                >
                <a class="btn-edit" href="/edit/${theatre._id}">Edit</a>
              </div>
            `
          : html`
              <div class="buttons">
                <a class="btn-like" href="/like">Like</a>
              </div>
            `}
        
        <p class="likes">Likes: 0</p>
      </div>
    </div>
  </section>
`;
console.log(detailsTemplate);

export async function detailsPage(ctx) {
  console.log(ctx.params);
  const theatre = await getTheatreId(ctx.params.id);
  const userData = getUserData();
  const isOwner = userData && theatre._ownerId == userData.id;
  console.log(isOwner);
  ctx.render(detailsTemplate(theatre, isOwner, onDelete));

  async function onDelete() {
    const confirmation = confirm(
      "Are you sure you want to delete this Theatre?"
    );

    if (confirmation) {
      await deleteTheatre(ctx.params.id);
      ctx.page.redirect("/");
    }
  }
}
