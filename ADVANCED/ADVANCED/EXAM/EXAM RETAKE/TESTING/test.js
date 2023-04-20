const companyAdministration = require("./companyAdministration.js");
const { expect } = require("chai");

describe("companyAdministration functionality", () => {
  describe("hiringEmployee", () => {
    it("checks the value of the position ", () => {
      expect(() =>
        companyAdministration.hiringEmployee("John", "worker", 4)
      ).to.throw("We are not looking for workers for this position.");
    });
    it("checks experience", () => {
      const result = companyAdministration.hiringEmployee(
        "John",
        "Programmer",
        "3"
      );

      expect(result).to.equal(
        "John was successfully hired for the position Programmer."
      );
    });
    it("checks experience", () => {
      const result = companyAdministration.hiringEmployee(
        "John",
        "Programmer",
        "2"
      );
      expect(result).to.equal("John is not approved for this position.");
    });
  });

  describe("calculateSalary", () => {
    it("calculate the salary", () => {
      expect(companyAdministration.calculateSalary(4)).to.equal(60);
    });

    it("calculate the salary", () => {
      expect(companyAdministration.calculateSalary(160)).to.equal(2400);
    });
    it("calculate the salary", () => {
      expect(companyAdministration.calculateSalary(200)).to.equal(4000);
    });
    it("calculate the salary", () => {
      expect(() => companyAdministration.calculateSalary(-1)).to.throw(
        "Invalid hours"
      );
    });

    it("checks for invalid hours", () => {
      expect(() => companyAdministration.calculateSalary(" ")).to.throw(
        "Invalid hours"
      );
    });
    it("checks for invalid hours", () => {
      expect(() => companyAdministration.calculateSalary("4")).to.throw(
        "Invalid hours"
      );
    });
  });
  describe("firedEmployee", () => {
    it("checks for invalid input", () => {
      expect(() => companyAdministration.firedEmployee("george", 2)).to.throw(
        "Invalid input"
      );
    });

    it("checks for invalid input", () => {
      expect(() =>
        companyAdministration.firedEmployee(["george", "peter", "john"], "3")
      ).to.throw("Invalid input");
    });

    it("checks for invalid input", () => {
      expect(() =>
        companyAdministration.firedEmployee(["george", "peter", "john"], -3)
      ).to.throw("Invalid input");
    });

    it("checks for invalid input", () => {
      expect(() =>
        companyAdministration.firedEmployee(["george", "peter", "john"], 30)
      ).to.throw("Invalid input");
    });

    it("removes employee", () => {
      expect(
        companyAdministration.firedEmployee(["george", "peter", "john"], 2)
      ).to.equal("george, peter");
    });

    it("removes employee", () => {
        const result = companyAdministration.firedEmployee(["george", "peter", "john"], 2)
        expect(
            result
        ).to.equal("george, peter");
      });

  });
});
