function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let staticsCount = Number(input[1]);
    let clothingPrice = Number(input[2]);
    decorPrice = (budget * 10) / 100;
    totalClothingPrice = staticsCount * clothingPrice
    if (staticsCount > 150) {
        totalClothingPrice = totalClothingPrice * 0.9;
    }
    totalMoneyNeeded = decorPrice + totalClothingPrice;
    missingMoney = Math.abs(budget - totalMoneyNeeded);
    if (totalMoneyNeeded > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${missingMoney.toFixed(2)} leva more.`);
    }
    else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${missingMoney.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88", "222", "55.68"])