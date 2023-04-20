window.addEventListener("load", async () => {
  const token = localStorage.getItem("token");
  if (token == null) {
    window.location = "/login.html";
  }
  const form = document.querySelector("form");
  form.addEventListener("submit", onCreate);
});
async function onCreate(event) {
  const url = `http://localhost:3030/data/recipes`;
  event.preventDefault();

  const form = event.target;
  formData = new FormData(form);
  const name = formData.get("name").trim();
  const image = formData.get("img").trim();
  const ingredients = formData.get("ingredients").trim().split("\n");
  const preparation = formData.get("steps").trim().split("\n");
  const recipe = { name, image, ingredients, preparation };
  const token = localStorage.getItem("token");
  if (token == null) {
    window.location = "/login.html";
    return;
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": token
      },
      body: JSON.stringify(recipe),
    });
    if (response.ok == false) {
      const error = await response.json();
      throw new Error(error.message);
    }
    await response.json();
    window.location = '/index.html'
  } catch (error) {
    alert(error.message);
  }
}
