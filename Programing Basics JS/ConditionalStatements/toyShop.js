function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let allToysCount = puzzleCount + dollsCount + bearsCount + minionsCount +
        trucksCount;

    let salesSum = (puzzleCount * 2.60) + (dollsCount * 3) + (bearsCount * 4.10) +
        (minionsCount * 8.20) + (trucksCount * 2);
    if (allToysCount >= 50) {
        salesSum = salesSum * 0.75;
    }
    salesSum = salesSum * 0.9;
    if (salesSum >= tripPrice) {
        console.log(`Yes! ${(salesSum - tripPrice).toFixed(2)} lv left.`)
    }
    else {
        console.log(`Not enough money! ${Math.abs(salesSum - tripPrice).toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"])