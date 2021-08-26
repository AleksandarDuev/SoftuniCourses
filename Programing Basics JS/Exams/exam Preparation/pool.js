function pool(input) {
    let pplCount = Number(input[0]);
    let tax = Number(input[1]);
    let chairPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalTax = pplCount * tax;
    let usedChairs = Math.ceil(pplCount * 0.75);
    let priceUsedChairs = usedChairs * chairPrice;
    let usedUmbrelas = Math.ceil(pplCount * 0.5);
    let usedUmbrelasPrice = usedUmbrelas * umbrellaPrice;
    let totalPrice = totalTax + priceUsedChairs + usedUmbrelasPrice;
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
pool(["21", "5.50", "4.40", "6.20"]);