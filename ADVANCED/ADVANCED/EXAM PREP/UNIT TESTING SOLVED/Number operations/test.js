const numberOperations = require("./numberOperations.js");
const { expect } = require("chai");


describe("numberOperations functionality", () => {
  describe("function powNumber", () => {
    it("returns the power of the given number", () => {
      expect(numberOperations.powNumber(2)).to.equal(4);
    });
  });
  describe("numberChecker()", () => {
    it("undefined", () => {
      expect(() => numberOperations.numberChecker(undefined)).to.throw(
        "The input is not a number!"
      );
    });

    it("empty", () => {
      expect(() => numberOperations.numberChecker()).to.throw(
        "The input is not a number!"
      );
    });

    it("string", () => {
      expect(() => numberOperations.numberChecker("a")).to.throw(
        "The input is not a number!"
      );
    });

    it("1", () => {
      expect(numberOperations.numberChecker(1)).to.equal(
        "The number is lower than 100!"
      );
    });

    it("100", () => {
      expect(numberOperations.numberChecker(100)).to.equal(
        "The number is greater or equal to 100!"
      );
    });
  });

  describe("function sumArrays", () => {
    it("loops through the arrays", () => {
      const result = numberOperations.sumArrays([1, 2], [1, 2]);

      expect(result).to.deep.equal([2, 4]);
    });

    it("arr1 > arr2", () => {
      const result = numberOperations.sumArrays([1, 2, 3], [1, 2]);
      expect(result).to.deep.equal([2, 4, 3]);
    });

    it("arr1 < arr2", () => {
      const result = numberOperations.sumArrays([1, 2], [1, 2, 3]);
      expect(result).to.deep.equal([2, 4, 3]);
    });
  });
});
