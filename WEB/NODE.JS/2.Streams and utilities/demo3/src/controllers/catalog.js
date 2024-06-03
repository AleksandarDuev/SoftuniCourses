const { getProducts, createProduct } = require("../data");
const { render, loadFragment } = require("../view");

module.exports = {
  async catalog(req, res) {
    const products = await getProducts();
    loadFragment("catalog", (fragment) => {
      const result = fragment.replace(
        "{{{items}}}",
        products.map((p) => `<li>${p.name} - ${p.price}</li>`).join("\n")
      );
      res.html(render(result, "Catalog"));
    });
  },
  createGet(req, res) {
    loadFragment("create", (fragment) => {
      res.html(render(fragment, "Create Product"));
    });
  },
  createPost(req, res) {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async() => {
      const formData = body
      .split('&')
      .map(prop => prop.split('='))
      .reduce((acc, [key, val]) =>Object.assign(acc,{[key]:val}), {})
      
      await createProduct({
        name: formData.name,
        price: Number(formData.price)
      })
    })
    res.redirect("/catalog");
  },
};
