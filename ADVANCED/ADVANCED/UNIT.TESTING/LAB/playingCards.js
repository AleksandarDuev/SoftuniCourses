function playingCards(face, suit) {
  const validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = {
    S: "\u2660 ",
    H: "\u2665 ",
    D: "\u2666 ",
    C: "\u2663 ",
  };
  if (validFaces.includes(face) === false) {
    throw new Error("Error");
  }
  if (Object.keys(suits).includes(suit) === false) {
    throw new Error("Error");
  }

  return {
    face,
    suit: suits[suit],
    toString() {
      return `${this.face}${this.suit}`;
    },
  };
}
let card = playingCards("A", "S");
console.log(card.toString());
playingCards("A", "S");
playingCards("10", "H");
playingCards("1", "C");
