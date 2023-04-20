function attachEvents() {
  document
    .getElementById("btnLoadPosts")
    .addEventListener("click", getAllPosts);
  document.getElementById("btnViewPost").addEventListener("click", displayPost);
}

attachEvents();

async function displayPost() {
  let selectedId = document.getElementById("posts").value;
  const [post, comments] = await promise.all([
    getPostById(selectedId),
    getCommentsByPostId(selectedId),
  ]);

  document.getElementById("post-title").textContent = post.title;
  document.getElementById("post-body").textContent = post.body;
  const ulElement = document.getElementById("post-comments");
  ulElement.replaceChildren();
  comments.forEach((c) => {
    const liElement = document.createElement("li");
    liElement.textContent = c.text;
    ulElement.appendChild(liElement);
  });
}
async function getAllPosts() {
  const url = `http://localhost:3030/jsonstore/blog/posts`;
  const response = await fetch(url);
  const data = await response.json();
  let selectElement = document.getElementById("posts");
  selectElement.replaceChildren(); // delete the content
  // parse data and populate it in the list
  Object.values(data).forEach((post) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = post.title;
    optionElement.value = post.id;
    selectElement.appendChild(optionElement);
  });
}
async function getPostById(postId) {
  const url = `http://localhost:3030/jsonstore/blog/posts/${postId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
async function getCommentsByPostId(postId) {
  const url = `http://localhost:3030/jsonstore/blog/comments`;
  const response = await fetch(url);
  const data = await response.json();
  return Object.values(data).filter((comment) => comment.postId === postId);
}
