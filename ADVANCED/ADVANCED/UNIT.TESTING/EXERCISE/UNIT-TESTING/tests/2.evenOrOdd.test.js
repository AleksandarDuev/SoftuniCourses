const { expect } = require("chai");
const {isOddOrEven} = require("../toBeTested/2.evenOrOdd");
describe("Test if string length is odd or even", () => {
  it("tests invalid input", () => {
    expect(isOddOrEven(1)).to.undefined;
    expect(isOddOrEven({})).to.be.undefined;
    expect(isOddOrEven([])).to.be.undefined;
  });
  it("tests if it returns odd length", () => {
    expect(isOddOrEven("asd")).to.be.equal("odd");
  });
  it("tests if it returns even length", () => {
    expect(isOddOrEven("ev")).to.be.equal("even");
    expect(isOddOrEven("")).to.be.equal("even");
  });

});
