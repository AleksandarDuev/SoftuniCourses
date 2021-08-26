function cardGame(input) {
  let symbolPoints = { J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1 };
  let players = {};
  let results = {};
  for (let player of input) {
    let tokens = player.split(": ");
    let currentPlayer = tokens[0];
    let currentPlayerCards = tokens[1].split(", ");
    if (!Object.keys(players).includes(currentPlayer)) {
      players[currentPlayer] = [];
    }
    players[currentPlayer] = players[currentPlayer].concat(currentPlayerCards);
  }
  for (let [playerName, playerCards] of Object.entries(players)) {
    results[playerName] = 0;
    for (let i = 0; i < playerCards.length; i++) {
      let card = playerCards[i];
      if(playerCards.indexOf(card) === i){
        let cardAsArray = card.split('');
        let cardType = cardAsArray.pop();
        let power = cardAsArray.join('');
        let cardPoints = 0;
        if (Object.keys(symbolPoints).includes(power)) {
          cardPoints = symbolPoints[power] * symbolPoints[cardType];
        } else {
          cardPoints = Number(power) * symbolPoints[cardType];
        }
        results[playerName] += cardPoints;
      }
      
    }
  }
  for(let [key, value] of Object.entries(results)) {
    console.log(`${key}: ${value}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
