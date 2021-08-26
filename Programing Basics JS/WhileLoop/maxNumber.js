function maxNumber(input) {
    let index = 0;
    let number = input[index];
    index++;
    let maxNum = Number.MIN_SAFE_INTEGER;
    while (number !== "Stop") {
        let currentNum = Number(number);
        if (currentNum > maxNum) {
            maxNum = currentNum;

        }
        number = input[index];
        index++
    }
    console.log(maxNum);
}
maxNumber(["-10",
    "20",
    "-30",
    "Stop"])
