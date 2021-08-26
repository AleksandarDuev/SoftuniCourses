function energyBooster(input) {
    let fruit = input[0];
    let packSize = input[1];
    let packCount = input[2];
    let packPrice = 0;
    let totalPrice = 0;
    let discount = 0;
    if (fruit === "Watermelon") {
        if (packSize === "big") {
            packPrice = 5 * 28.70;
            totalPrice = packPrice * packCount;
        } else {
            packPrice = 2 * 56;
            totalPrice = packPrice * packCount;
        }
    } else if (fruit === "Mango") {
        if (packSize === "big") {
            packPrice = 5 * 19.60;
            totalPrice = packPrice * packCount;
        } else {
            packPrice = 2 * 36.66;
            totalPrice = packPrice * packCount;
        }
    } else if (fruit === "Pineapple") {
        if (packSize === "big") {
            packPrice = 5 * 24.80;
            totalPrice = packPrice * packCount;
        } else {
            packPrice = 2 * 42.10;
            totalPrice = packPrice * packCount;
        }
    } else if (fruit === "Raspberry") {
        if (packSize === "big") {
            packPrice = 5 * 15.20;
            totalPrice = packPrice * packCount;
        } else {
            packPrice = 2 * 20;
            totalPrice = packPrice * packCount;
        }
    }
    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice = totalPrice * 0.85;
    } else if (totalPrice > 1000) {
        totalPrice = totalPrice * 0.50;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
energyBooster(["Mango", "big", "8"])