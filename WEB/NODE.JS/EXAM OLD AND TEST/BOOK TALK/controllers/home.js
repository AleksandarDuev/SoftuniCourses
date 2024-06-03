const { isUser } = require("../middleware/guards");
const preload = require("../middleware/preload");
const { getAllBooks, getBooksByUser } = require("../services/book");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/catalog", async (req, res) => {
  const books = await getAllBooks();
  
  res.render("catalog", { title: "Book Reviews", books }); // books:[] to test if there is nothing in the collection
});

//in details show the logic for which buttons to show.
router.get("/catalog/:id", preload(true), (req, res) => {
  // console.log(req.session);
  // console.log(res.locals);
  const book = res.locals.book;
  if (req.session.user) {
    book.hasUser = true;
    book.isOwner = req.session.user._id == book.owner._id;

    if (book.wishingList.some((reader) => reader._id == req.session.user._id)) {
      book.hasWished = true;
    }
  }

  res.render("details", { title: "Book Details" });
});

router.get("/profile", isUser(), async (req, res) => {
  
  res.locals.wishedBooks = await getBooksByUser(res.locals.user._id);

  //console.log(res.locals.wishedBooks);

  res.render("profile", { title: "Profile Page"});
});

module.exports = router;
