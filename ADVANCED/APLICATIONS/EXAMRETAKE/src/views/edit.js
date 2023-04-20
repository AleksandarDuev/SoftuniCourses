import { editTheatre, getTheatreId } from "../api/data.js";
import { html } from "../lib.js";

const editTemplate = (theatre, onSubmit) => {
  
  return html` <section id="editPage">
    <form @submit=${onSubmit} class="theater-form">
      <h1>Edit Theater</h1>
      <div>
        <label for="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Theater name"
          value=${theatre.title}
        />
      </div>
      <div>
        <label for="date">Date:</label>
        <input
          id="date"
          name="date"
          type="text"
          placeholder="Month Day, Year"
          value=${theatre.date}
        />
      </div>
      <div>
        <label for="author">Author:</label>
        <input
          id="author"
          name="author"
          type="text"
          placeholder="Author"
          value=${theatre.author}
        />
      </div>
      <div>
        <label for="description">Theater Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          .value=${theatre.description}
        ></textarea>
        
      </div>
      <div>
        <label for="imageUrl">Image url:</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          placeholder="Image Url"
          value=${theatre.imageUrl}
        />
      </div>
      <button class="btn" type="submit">Submit</button>
    </form>
  </section>`;
};

export async function editPage(ctx) {
  const theatre = await getTheatreId(ctx.params.id); //load concrete meme

  ctx.render(editTemplate(theatre, onSubmit));

  async function onSubmit(event) {
   console.log(1);
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get("title").trim();
    const date = formData.get("date").trim();
    const author = formData.get("author");
    const imageUrl = formData.get("imageUrl");
    const description = formData.get("description");

    if (title == "" || date == "" || author == "" || imageUrl == "" || description=='') {
      return alert("All fields are required");
    }
    console.log(2);
    await editTheatre(ctx.params.id, {
      title,
      date,
      author,
      imageUrl,
      description
    });
    console.log(3);
    ctx.page.redirect(`/details/${ctx.params.id}`);
  }
}
