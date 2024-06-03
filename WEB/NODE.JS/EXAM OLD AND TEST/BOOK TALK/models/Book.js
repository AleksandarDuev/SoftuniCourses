const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN = /^https?:\/\/(.+)/;

const bookSchema = new Schema({
  title: {
    type: String,
    minLength: [2, "Title must be at least 2 characters long"],
  },
  author: {
    type: String,
    minLength: [5, "Author must be at least 5 characters long"],
  },
  img: {
    type: String,
    validate: {
      validator(value) {
        return URL_PATTERN.test(value);
      },
      message: "Image must be a valid URL",
    },
  },
  bookReview: {
    type: String,
    minLength: [10, "Review must be at least 10 characters long"],
  },
  genre: {
    type: String,
    minLength: [3, "Genre must be at least 3 characters long"],
  },
  stars: { type: Number, required: true, min: 1, max: 5 },
  wishingList: { type: [ObjectId], ref: "User", default: [] },
  owner: { type: ObjectId, ref: "User", required: true },
});

const Book = model("Book", bookSchema);

module.exports = Book;
