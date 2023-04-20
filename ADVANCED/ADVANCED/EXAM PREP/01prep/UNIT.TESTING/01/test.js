const library = require("./library.js");
const { expect } = require("chai");

describe(`calcPriceOfBook()`, () => {
  it("validates book price", () => {
    expect(library.calcPriceOfBook("book", 1981)).to.equal(
      "Price of book is 20.00"
    );
    expect(library.calcPriceOfBook("book", 1980)).to.equal(
      "Price of book is 10.00"
    );
    expect(library.calcPriceOfBook("book", 1979)).to.equal(
      "Price of book is 10.00"
    );
  });
  it("validates input", () => {
    expect(() => library.calcPriceOfBook(1, 3)).to.throw("Invalid input");
    expect(() => library.calcPriceOfBook(3)).to.throw("Invalid input");
    expect(() => library.calcPriceOfBook("a")).to.throw("Invalid input");
    expect(() => library.calcPriceOfBook("a", "b")).to.throw("Invalid input");
  });
});
describe(`findBook()`, () => {
  it("checks array length", () => {
    expect(() => library.findBook([], "b")).to.throw(
      "No books currently available"
    );
  });
  it("finds book", () => {
    expect(library.findBook(["b", "c"], "b")).to.deep.equal(
      "We found the book you want."
    );
  });
  it("w", () => {
    expect(library.findBook(["b", "c"], "a")).to.deep.equal(
      "The book you are looking for is not here!"
    );
  });
});
describe(`arrangeTheBooks()`, () => {
  it("checks the input", () => {
    expect(() => library.arrangeTheBooks(2.3)).to.throw("Invalid input");
    expect(() => library.arrangeTheBooks(-2)).to.throw("Invalid input");
  });
  it("checks available space", () => {
    expect(library.arrangeTheBooks(39)).to.equal(
      "Great job, the books are arranged."
    );
    expect(library.arrangeTheBooks(40)).to.equal(
      "Great job, the books are arranged."
    );
    expect(library.arrangeTheBooks(41)).to.equal(
      "Insufficient space, more shelves need to be purchased."
    );
  });
});
