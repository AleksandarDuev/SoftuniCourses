// initialization;

import { e, showView } from "./dom.js";

// - find relevant section;
const section = document.getElementById("movie-details");
// - detach section from DOM;
section.remove();

// visualization logic;
export function showDetails(movieId) {
  
  showView(section);
  getMovie(movieId);
}
async function getMovie(id) {
  section.replaceChildren(e("p", {}, "Loading..."));

  const requests = [
    fetch(`http://localhost:3030/data/movies/${id}`),
    fetch(
      `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
    ),
  ];
  const userData = JSON.parse(getItem("userData"));
  if (userData !== null) {
    requests.push(
      fetch(
        `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22&count`
      )
    );
  }
  const [movieRes, likesRes, hasLikedRes] = await Promise.all(requests);
  const [movieData, likes, hasLiked] = await Promise.all([
    movieRes.json(),
    likesRes.json(),
    hasLikedRes && hasLikedRes.json(), // if hasLikedRes == null, кода няма да се изпълни!
  ]);
  section.replaceChildren(createDetails(movieData, likes, hasLiked));
}
function createDetails(movie, likes, hasLiked) {
  const controls = e(
    "div",
    { className: "col-md-4 text-center" },
    e("h3", { className: "my-3" }, "Movie Description"),
    e("p", {}, movie.description)
  );

  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData !== null) {
    if (userData.id == movie._ownerId) {
      controls.appendChild(
        e("a", { className: "btn btn-danger", href: "#" }, "Delete")
      );
      controls.appendChild(
        e("a", { className: "btn btn-warning", href: "#" }, "Edit")
      );
    } else {
      if (hasLiked) {
        controls.appendChild(
          e("a", { className: "btn btn-primary", href: "#" }, "Unlike")
        );
      } else {
        controls.appendChild(
          e(
            "a",
            { className: "btn btn-primary", href: "#", onClick: onLike },
            "Like"
          )
        );
      }
    }
  }
  controls.appendChild(
    e("span", { className: "enrolled-span" }, `Liked ${likes}`)
  );

  const element = e(
    "div",
    { className: "container" },
    e(
      "div",
      { className: "row bg-light text-dark" },
      e("hi", {}, `Movie title: ${movie.title}`),
      e(
        "div",
        { className: "col-md-8" },
        e("img", { className: "img-thumbnail", src: movie.img, alt: "movie" })
      ),
      controls
    )
  );
  return element;
  async function onLike() {
    const res = await fetch(`http://localhost:3030/data/likes`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": userData.token
      },
      body:JSON.stringify({
          movieId: movie._id
      })
    });
    showDetails(movie._id)
  }
}
