function newHouse(input) {
    flowerType = input[0];
    flowerCount = input[1];
    budget = Number(input[2]);
    let price = 0;
    if (flowerType === "Roses") {
        if (flowerCount <= 80) {
            price = (flowerCount * 5).toFixed(2);
        } else {
            price = ((flowerCount * 5) * 0.9).toFixed(2);
        }

    } else if (flowerType === "Dahlias") {
        if (flowerCount <= 90) {
            price = (flowerCount * 3.8).toFixed(2);
        } else {
            price = ((flowerCount * 3.8) * 0.85).toFixed(2);
        }
    } else if (flowerType === "Tulips") {
        if (flowerCount <= 80) {
            price = (flowerCount * 2.8).toFixed(2);
        } else {
            price = ((flowerCount * 2.8) * 0.85).toFixed(2);
        }
    } else if (flowerType === "Narcissus") {
        if (flowerCount >= 120) {
            price = (flowerCount * 3.0).toFixed(2);
        } else {
            price = ((flowerCount * 3.0) * 1.15).toFixed(2);
        }
    } else if (flowerType === "Gladiolus") {
        if (flowerCount >= 80) {
            price = (flowerCount * 2.50).toFixed(2);
        } else {
            price = ((flowerCount * 2.50) * 1.20).toFixed(2);
        }
    }
    moneyLeft = (budget - price);
    if (budget >= price) {

        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(Math.abs(moneyLeft)).toFixed(2)} leva more.`);
    }
}
newHouse(["Tulips",
    "88",
    "260"])

