function aluminumJoinery(input) {
    let windowsCount = Number(input[0]);
    let windowsType = input[1];
    let delivery = input[2];
    let price = 0;


    if (windowsType === "90X130") {
        price = windowsCount * 110;
        if (windowsCount > 30 && windowsCount <= 60) {
            price *= 0.95;
        } else if (windowsCount > 60) {
            price *= 0.92;
        }
    } else if (windowsType === "100X150") {
        price = windowsCount * 140;
        if (windowsCount > 40 && windowsCount <= 80) {
            price *= 0.94;
        } else if (windowsCount > 80) {
            price *= 0.90;
        }
    } else if (windowsType === "130X180") {
        price = windowsCount * 190;
        if (windowsCount > 20 && windowsCount <= 50) {
            price *= 0.93;
        } else if (windowsCount > 50) {
            price *= 0.88;
        }
    } else if (windowsType === "200X300") {
        price = windowsCount * 250;
        if (windowsCount > 25 && windowsCount <= 50) {
            price *= 0.91;
        } else if (windowsCount > 50) {
            price *= 0.86;
        }
    }

    if (delivery === "With delivery") {
        price += 60;

    }
    if (windowsCount >= 100) {
        price *= 0.96;
    }
    if (windowsCount < 10) {
        console.log("Invalid order");
    } else {
        console.log(`${price.toFixed(2)} BGN`);
    }

}
aluminumJoinery(["2",
    "130X180",
    "With delivery"])

