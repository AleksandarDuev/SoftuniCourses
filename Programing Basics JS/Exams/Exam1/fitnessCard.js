function fitnessCard(input) {
    let sum = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let cardPrice = 0;
    if (gender === "m") {
        if (sport === "Gym") {
            cardPrice = 42;
        } else if (sport === "Boxing") {
            cardPrice = 41;
        } else if (sport === "Yoga") {
            cardPrice = 45;
        } else if (sport === "Zumba") {
            cardPrice = 34;
        } else if (sport === "Dances") {
            cardPrice = 51;
        } else if (sport === "Pilates") {
            cardPrice = 39;
        }
    } else if (gender === "f") {
        if (sport === "Gym") {
            cardPrice = 35;
        } else if (sport === "Boxing") {
            cardPrice = 37;
        } else if (sport === "Yoga") {
            cardPrice = 42;
        } else if (sport === "Zumba") {
            cardPrice = 31;
        } else if (sport === "Dances") {
            cardPrice = 53;
        } else if (sport === "Pilates") {
            cardPrice = 37;
        }
    }
    if (age <= 19) {
        cardPrice = cardPrice * 0.80;
    }
    if (sum >= cardPrice) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else if (cardPrice > sum) {
        console.log(`You don't have enough money! You need $${(cardPrice - sum).toFixed(2)} more.`)
    }
}
fitnessCard(["20", "f", "15", "Yoga"])