const cinema = require("./cinema.js");
const { expect } = require("chai");

describe("Cinema", () => {
  describe("showMovies", () => {
    it("empty array", () => {
      expect(cinema.showMovies([])).to.equal(
        "There are currently no movies to show."
      );
    });
    it("Shows available movies", () => {
      expect(
        cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"])
      ).to.equal("King Kong, The Tomorrow War, Joker");
    });
  });
  describe("TicketPrice", () => {
    it("", () => {
      expect(cinema.ticketPrice("Premiere")).to.equal(12);
      expect(cinema.ticketPrice("Normal")).to.equal(7.5);
      expect(cinema.ticketPrice("Discount")).to.equal(5.5);
    });
    it("", () => {
      expect(() =>cinema.ticketPrice("")).to.throw("Invalid projection type.");
      expect(() =>cinema.ticketPrice(1)).to.throw("Invalid projection type.");
      expect(() =>cinema.ticketPrice("something else")).to.throw("Invalid projection type.");
    });

    describe("SwapSeatsInHall", () => {
      it("", () => {
        expect(cinema.swapSeatsInHall(1)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      });
      it("", () => {
        expect(cinema.swapSeatsInHall(1, 2.1)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      });
      it("", () => {
        expect(cinema.swapSeatsInHall(1.3, 2.1)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      });
      it("", () => {
        expect(cinema.swapSeatsInHall(1.3, 2)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      });
      it("", () => {
        expect(cinema.swapSeatsInHall(21, 2)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      });
      it("", () => {
        expect(cinema.swapSeatsInHall(1, 21)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      });
      it("", () => {
        expect(cinema.swapSeatsInHall(0, 20)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      });
      it("", () => {
        expect(cinema.swapSeatsInHall(19, 0)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      })
      it("", () => {
        expect(cinema.swapSeatsInHall(19, -1)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      })
      it("", () => {
        expect(cinema.swapSeatsInHall(-3, 20)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      })
      it("", () => {
        expect(cinema.swapSeatsInHall(0, 5)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      })
      it("", () => {
        expect(cinema.swapSeatsInHall(0, 0)).to.equal(
          "Unsuccessful change of seats in the hall."
        );
      })
      it("", () => {
        expect(cinema.swapSeatsInHall(1, 20)).to.equal(
          "Successful change of seats in the hall."
        );
      })
      it("", () => {
        expect(cinema.swapSeatsInHall(20, 20)).to.equal(
          "Successful change of seats in the hall."
        );
      })
      it("", () => {
        expect(cinema.swapSeatsInHall(20, 2)).to.equal(
          "Successful change of seats in the hall."
        );
      })
    });
  });
});
