import { getMyTheatres } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const profileTemplate = (theatres) => html`
  <!--Profile Page-->

  <section id="profilePage">
    <div class="userInfo">
      <div class="avatar">
        <img src="./images/profilePic.png" />
      </div>
      <h2>steven@abv.bg</h2>
    </div>
    <div class="board">
        ${theatres.length > 0 
        ?theatres.map(card)
        : html`
              <div class="no-events">
        <p>This user has no events yet!</p>
      </div>
        `
        }


    </div>
  </section>
`;

const card = (theatre) =>html`<div class="eventBoard">
<div class="event-info">
  <img src=${theatre.imageUrl} />
  <h2>${theatre.title}</h2>
  <h6>${theatre.date}</h6>
  <a href="" class="details-button">${theatre.details}</a>
</div>
</div>`

export async function profilePage(ctx) {
  const userData = getUserData();
  const theatres = await getMyTheatres(userData.id);
  ctx.render(profileTemplate(theatres));
}
