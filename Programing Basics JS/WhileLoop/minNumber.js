function minNumber(input) {
    let index = 0;
    let number = input[index];
    index++;
    let minNum = Number.MAX_SAFE_INTEGER;
    while (number !== "Stop") {
        let currentNum = Number(number);
        if (currentNum < minNum) {
            minNum = currentNum;

        }
        number = input[index];
        index++
    }
    console.log(minNum);
}
minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
    