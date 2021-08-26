function accountBalance(input) {
    let totalSum = 0;
    let index = 0;
    let command = input[index];
    index++
    while (command !== "NoMoreMoney") {
        let currentNum = Number(command);
        if (currentNum < 0) {
            console.log("Invalid operation!");
            break;
        }
        totalSum += currentNum;
        console.log(`Increase: ${currentNum.toFixed(2)}`);
        command = input[index];
        index++;
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])
