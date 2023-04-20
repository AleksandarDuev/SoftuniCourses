const testNumbers = require("./testNumbers.js");
const { expect } = require("chai");

describe("Test numbers", () => {
    describe("Sum Numbers", () => {
      it("Works with valid numbers", () => {
        expect(testNumbers.sumNumbers(2,4)).to.equal('6.00')
      });
      it("Works with negative numbers", () => {
        expect(testNumbers.sumNumbers(-1, 4)).to.equal('3.00');
        expect(testNumbers.sumNumbers(3, -4)).to.equal('-1.00');
      });
      it("Works with floating point numbers", () => {
        expect(testNumbers.sumNumbers(5.3, 3.7)).to.equal('9.00');
        expect(testNumbers.sumNumbers(5, 3.7)).to.equal('8.70');
        expect(testNumbers.sumNumbers(5.3, -3)).to.equal('2.30');


      });
      it("Returns undefined with string parameters", () => {
        expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
        expect(testNumbers.sumNumbers(2, '1')).to.equal(undefined);
        expect(testNumbers.sumNumbers('2', '1')).to.equal(undefined);
        expect(testNumbers.sumNumbers('a', 'b')).to.equal(undefined);

      });
      it("Returns undefined with invalid parameters", () => {
        expect(testNumbers.sumNumbers([],1)).to.equal(undefined);
        expect(testNumbers.sumNumbers({}, 1)).to.equal(undefined);
        expect(testNumbers.sumNumbers(1, '')).to.equal(undefined);
        expect(testNumbers.sumNumbers([],{})).to.equal(undefined);
      });
    });
  
    describe("Number Checker", () => {
      it("Works with odd value", () => {
        expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
      });
      it("Works with even value", () => {
        expect(testNumbers.numberChecker(2)).to.equal("The number is even!");
      });
      it("Works with odd value as string", () => {
        expect(testNumbers.numberChecker("1")).to.equal("The number is odd!");
      });
      it("Works with even value as string", () => {
        expect(testNumbers.numberChecker("2")).to.equals("The number is even!");
      });
      it("Works with empty string", () => {
        expect(testNumbers.numberChecker('')).to.equal("The number is even!");
      });
      it("Detects invalid parameters", () => {
        expect(() =>testNumbers.numberChecker('a')).to.throw("The input is not a number!");
      });
    });
    describe("averageSumArray", () => {
      it("Works with integers", () => {
        expect(testNumbers.averageSumArray([1,2,3])).to.equal(2)
      });
      it("Works with floating point", () => {
        expect(testNumbers.averageSumArray([1.2, 2.4, 5.4])).to.equal(3)
      });
    });
  });