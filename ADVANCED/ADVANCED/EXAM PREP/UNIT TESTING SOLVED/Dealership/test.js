const dealership = require("./dealership.js");
const { expect } = require("chai");

describe("dealership functionality", () => {
  describe("newCarCost ()", () => {
    it("returns new car price", () => {
      expect(dealership.newCarCost("Audi A4 B8", 30000)).to.equal(15000);
    });
  });

  describe("carEquipment()", () => {
    it("returns selected extras", () => {
      expect(
        dealership.carEquipment(["a", "b", "c", "d"], [0, 3])
      ).to.deep.equal(["a", "d"]);
    });
  });
  describe("euroCategory()", () => {
    it("returns message for the final price euro 4+", () => {
      expect(
        dealership.euroCategory(4)
      ).to.equal('We have added 5% discount to the final price: 14250.');
      expect(
        dealership.euroCategory(5)
      ).to.equal('We have added 5% discount to the final price: 14250.');
      
      
      
    });
    it("returns message for the final price < euro4", () => {
      expect(
        dealership.euroCategory(3)
      ).to.equal('Your euro category is low, so there is no discount from the final price!');
      expect(
        dealership.euroCategory(2)
      ).to.equal('Your euro category is low, so there is no discount from the final price!');
      
      expect(
        dealership.euroCategory(1)
      ).to.equal('Your euro category is low, so there is no discount from the final price!');
      
    });
  });
  
});
