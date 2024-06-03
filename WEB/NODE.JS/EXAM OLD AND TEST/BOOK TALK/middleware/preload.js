const bookService = require("../services/book");

function preload(populate) {
  return async function (req, res, next) {
    const id = req.params.id;

    if (populate) {
      res.locals.book = await bookService.getBookAndUsers(id);
    } else {
      res.locals.book = await bookService.getBookById(id);
    }

    next();
  };
}

module.exports = preload;
