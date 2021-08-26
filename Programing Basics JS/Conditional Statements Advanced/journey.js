function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let spentMoney = 0;
    let roomType;
    let place;
    if (budget <= 100) {
        if (season === "summer") {
            spentMoney = budget * 0.3;
            roomType = "Camp";
            place = "Bulgaria";
        } else {
            spentMoney = budget * 0.7;
            roomType = "Hotel";
            place = "Bulgaria";
        }
    } else if (budget <= 1000) {
        if (season === "summer") {
            spentMoney = budget * 0.4;
            roomType = "Camp";
            place = "Balkans";
        } else {
            spentMoney = budget * 0.8;
            roomType = "Hotel";
            place = "Balkans";
        }
    } else {
        if (season === "summer") {
            spentMoney = budget * 0.9;
            roomType = "Hotel";
            place = "Europe";
        } else {
            spentMoney = budget * 0.9;
            roomType = "Hotel";
            place = "Europe";
        }

    }
    console.log(`Somewhere in ${place}`);
    console.log(`${roomType} - ${spentMoney.toFixed(2)}`);
}
journey(["75", "winter"])