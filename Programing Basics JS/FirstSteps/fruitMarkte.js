function fruitMarket(input) {
    let berrysPrice = Number(input[0]);
    let bananasInKG = Number(input[1]);
    let orangesInKg = Number(input[2]);
    let raspberrysInkg = Number(input[3]);
    let berrysInKg = Number(input[4]);
    raspberryPrice = berrysPrice / 2;
    orangesPrice = raspberryPrice * 0.6;
    bananasPrice = raspberryPrice * 0.2;
    TotalSum = (berrysInKg * berrysPrice) + (bananasInKG * bananasPrice)
        + (orangesInKg * orangesPrice) + (raspberrysInkg * raspberryPrice);
    console.log(TotalSum.toFixed(2));
}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);