import { deleteAlbum, getAlbumById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (album, isOwner, onDelete) => html`
  <section id="detailsPage">
    <div class="wrapper">
      <div class="albumCover">
        <img src=${album.imgUrl} />
      </div>
      <div class="albumInfo">
        <div class="albumText">
          <h1>Name: ${album.name}</h1>
          <h3>Artist: ${album.artist}</h3>
          <h4>Genre: ${album.genre}</h4>
          <h4>Price: ${album.price}</h4>
          <h4>Date: ${album.releaseDate}</h4>
          <p>Description: ${album.description}</p>
        </div>

        <!-- Only for registered user and creator of the album-->
        ${isOwner ? html`<div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a href="javascript:void(0)" @click="${onDelete}" class="remove">Delete</a>
            </div>` : null}
        
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const album = await getAlbumById(ctx.params.id);
  const userData = getUserData();
  const isOwner = userData && album._ownerId == userData.id;

  ctx.render(detailsTemplate(album, isOwner, onDelete));

  async function onDelete() {
    const confirmation = confirm('Are you sure you want to delete this Album?')
 
    if (confirmation) {
        await deleteAlbum(ctx.params.id);
        ctx.page.redirect('/catalog');
    }
  }
}
