function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermansCount = Number(input[2]);
    let shipRent = 0;
    if (season === "Spring") {
        if (fishermansCount <= 6) {
            shipRent = 3000 * 0.9;
        } else if (fishermansCount >= 7 && fishermansCount <= 11) {
            shipRent = 3000 * 0.85;
        } else {
            shipRent = 3000 * 0.75;
        }
    } else if (season === "Summer" || season === "Autumn") {
        if (fishermansCount <= 6) {
            shipRent = 4200 * 0.9;
        } else if (fishermansCount >= 7 && fishermansCount <= 11) {
            shipRent = 4200 * 0.85;
        } else {
            shipRent = 4200 * 0.75;
        }
    } else if (season === "Winter") {
        if (fishermansCount <= 6) {
            shipRent = 2600 * 0.9;
        } else if (fishermansCount >= 7 && fishermansCount <= 11) {
            shipRent = 2600 * 0.85;
        } else {
            shipRent = 2600 * 0.75;
        }
    }
    if (fishermansCount % 2 === 0 && season !== "Autumn") {
        shipRent = shipRent * 0.95;
    }


    if (budget >= shipRent) {
        money = (budget - shipRent).toFixed(2);
        console.log(`Yes! You have ${money} leva left.`);
    } else {
        let money = (shipRent - budget).toFixed(2);
        console.log(`Not enough money! You need ${money} leva.`)
    }
}
fishingBoat(["3000", "Summer", "11"])
