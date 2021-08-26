function club(input) {
    let index = 0;
    let targetMoney = Number(input[index]);
    index++;
    let income = 0;
    let command = input[index];
    index++
    let isParty = true;
    while (command !== "Party!") {
        let cocktailName = command;
        let count = Number(input[index]);
        index++;
        let cocktailPrice = cocktailName.length * count;

        if (cocktailPrice % 2 !== 0) {
            cocktailPrice *= 0.75;
        }
        income += cocktailPrice;
        if (income >= targetMoney) {
            isParty = false;
            break;
        }
        command = input[index];
        index++
    }
    if (isParty) {
        console.log(`We need ${(targetMoney - income).toFixed(2)} leva more.`);
    } else {
        console.log("Target acquired.");
    }
    console.log(`Club income - ${income.toFixed(2)} leva.`)
}
club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"]);
