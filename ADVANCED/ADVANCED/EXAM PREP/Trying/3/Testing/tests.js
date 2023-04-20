const repository = require("./solution.js.js");
const { expect } = require("chai");

describe("repository functionality", () => {
    describe("function get count", () => {
      it("returns the number of stored entities", () => {
        
        expect(repository.get count()).to.equal(4);
        
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
  
      // it("undefined", () => {
  
      // })
  
      // it("undefined", () => {
  
      // })
  
      // it("throws an error If the input is not a number ", () => {
      //   expect(() => numberOperations.numberChecker("-")).to.throw(
      //     "The input is not a number!"
      //   );
      //   expect(() => numberOperations.numberChecker("text")).to.throw(
      //     "The input is not a number!"
      //   );
      // });
  
      it("1", () => {
        expect(numberOperations.numberChecker(1)).to.equal(
          "The number is lower than 100!"
        );
      });
  
      it("-1", () => {
        expect(numberOperations.numberChecker(-1)).to.equal(
          "The number is lower than 100!"
        );
      });
  
      it("99", () => {
        expect(numberOperations.numberChecker(99)).to.equal(
          "The number is lower than 100!"
        );
      });
  
      it("99.9", () => {
        expect(numberOperations.numberChecker(99.9)).to.equal(
          "The number is lower than 100!"
        );
      });
  
      it("100", () => {
        expect(numberOperations.numberChecker(100)).to.equal(
          "The number is greater or equal to 100!"
        );
      });
  
      it("976", () => {
        expect(numberOperations.numberChecker(976)).to.equal(
          "The number is greater or equal to 100!"
        );
      });
  
      it("checks if it is lower than 100", () => {
        expect(numberOperations.numberChecker(100.5)).to.equal(
          "The number is greater or equal to 100!"
        );
        // expect(() => numberOperations.numberChecker(null)).to.throw(
        //   "The number is lower than 100!"
        // );
      });
  
      // it("null", () => {
      // expect(() => numberOperations.numberChecker(null)).to.throw(
      //   "The number is lower than 100!"
      // );
      // })
    });
  
    describe("function sumArrays", () => {
      it("loops through the arrays", () => {
        const result = numberOperations.sumArrays([1, 2], [1, 2]);
  
        expect(result).to.deep.equal([2, 4]);
        // expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.deep.equal([
        //   2, 4, 6,
        // ]);
        // expect(numberOperations.sumArrays([0, 3, 6], [1, 2, 3])).to.deep.equal([
        //   1, 5, 9,
        // ]);
        // expect(numberOperations.sumArrays([0, 3, 6], [-1, -2, -3])).to.deep.equal(
        //   [-1, 1, 3]
        // );
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
