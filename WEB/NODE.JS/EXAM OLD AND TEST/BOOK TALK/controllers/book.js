const preload = require("../middleware/preload");
const router = require("express").Router();
const { isUser, isOwner } = require("../middleware/guards");
const {
  createBook,
  updateBook,
  deleteBook,
  wishBook,
} = require("../services/book");
const mapErrors = require("../util/mappers");

router.get("/create", isUser(), (req, res) => {
  res.render("create", { title: "Create Book Review", data: {} });
});

router.post("/create", isUser(), async (req, res) => {
  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    stars: req.body.stars,
    img: req.body.img,
    bookReview: req.body.bookReview,
    //wishingList:,
    owner: req.session.user._id,
  };
  try {
    await createBook(book);
    res.redirect("/catalog");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("create", { title: "Create Book Review", data: book, errors });
  }
});

router.get("/edit/:id", preload(), isOwner(), (req, res) => {
  res.render("edit", { title: "Edit Preview" });
});

router.post("/edit/:id", preload(), isOwner(), async (req, res) => {
  const id = req.params.id;

  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    stars: req.body.stars,
    img: req.body.img,
    bookReview: req.body.bookReview,
  };

  try {
    await updateBook(id, book);
    res.redirect(`/catalog/${id}`);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    book._id = id;
    res.render("edit", { title: "Update Book Review", book, errors });
  }
});

router.get("/delete/:id", preload(), isOwner(), async (req, res) => {
  await deleteBook(req.params.id);

  res.redirect("/catalog");
});

router.get("/wish/:id", isUser(), async (req, res) => {
  const id = req.params.id;

  try {
    await wishBook(id, req.session.user._id);
  } catch (err) {
    console.error(err);
  } finally {
    res.redirect(`/catalog/${id}`);
  }
});

module.exports = router;
