const Book = require("../models/Book");

async function getAllBooks() {
  return Book.find({}).lean();
}

async function getBookById(id) {
  return Book.findById(id).lean();
}

async function getBookAndUsers(id) {
  return Book.findById(id).populate("owner").populate("wishingList").lean();
}

async function getBooksByUser(userId) {
return Book.find({wishingList: userId}).lean();  
}

async function createBook(book) {
  const result = new Book(book);
  await result.save();
}

async function updateBook(id, book) {
  const existing = await Book.findById(id);

  existing.title = book.title;
  existing.author = book.author;
  existing.genre = book.genre;
  existing.stars = book.stars;
  existing.img = book.img;
  existing.bookReview = book.bookReview;

  await existing.save();
}

async function deleteBook(id) {
  await Book.findByIdAndDelete(id)
}

async function wishBook(bookId, userId) {
const book = await Book.findById(bookId);
if (book.wishingList.includes(userId)){
  throw new Error ('User has already wished the book')
}
book.wishingList.push(userId);
await book.save();
}

module.exports = {
  getAllBooks,
  getBookById,
  getBookAndUsers,
  getBooksByUser,
  createBook,
  updateBook,
  deleteBook,
  wishBook
};
