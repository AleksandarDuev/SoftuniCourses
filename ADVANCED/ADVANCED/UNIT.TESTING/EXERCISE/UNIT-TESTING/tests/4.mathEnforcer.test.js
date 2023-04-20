const { expect } = require("chai");
const mathEnforcer = require("../toBeTested/4.mathEnforcer");

describe("Test MathEnforcer functionality", () => {
  describe("Test addFive function", () => {
    it("returns undefined when input is not a number", () => {
      expect(mathEnforcer.addFive("1")).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
      expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });
    it("adds 5 to input", () => {
      expect(mathEnforcer.addFive(0)).to.be.equal(5);
      expect(mathEnforcer.addFive(-3)).to.be.equal(2);
      expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);
    });
  });
  describe("Test subtractTen function", () => {
    it("returns undefined when input is not a number", () => {
      expect(mathEnforcer.subtractTen("1")).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
      expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });
    it("subtract 10 from input", () => {
      expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
      expect(mathEnforcer.subtractTen(-3)).to.be.equal(-13);
      expect(mathEnforcer.subtractTen(11)).to.be.equal(1);
      expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.01);
    });
  });
  describe("Test summing function", () => {
    it("returns undefined when one of the input arguments is not a number", () => {
      expect(mathEnforcer.sum("1", 1)).to.be.undefined;
      expect(mathEnforcer.sum([], 1)).to.be.undefined;
      expect(mathEnforcer.sum({}, 1)).to.be.undefined;
      expect(mathEnforcer.sum(undefined,1)).to.be.undefined;
      expect(mathEnforcer.sum(1, "1")).to.be.undefined;
      expect(mathEnforcer.sum(1, [])).to.be.undefined;
      expect(mathEnforcer.sum(1, {})).to.be.undefined;
      expect(mathEnforcer.sum(1,undefined)).to.be.undefined;
    });
    it("sum the input arguments", () => {
      expect(mathEnforcer.sum(0, 1)).to.be.equal(1);
      expect(mathEnforcer.sum(2, -3)).to.be.equal(-1);
      expect(mathEnforcer.sum(-3, -2)).to.be.equal(-5);
      expect(mathEnforcer.sum(2.3,4)).to.be.closeTo(6.3, 0.01);
      expect(mathEnforcer.sum(3, 1.1)).to.be.closeTo(4.1, 0.01);
    });
  });
});
