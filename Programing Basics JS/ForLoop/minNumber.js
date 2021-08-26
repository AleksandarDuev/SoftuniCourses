function minNumber(input) {
    let numCount = Number(input[0]);
    let minNumber = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= numCount; i++) {
        let num = Number(input[i]);
        if (num < minNumber) {
            minNumber = num;
        }

    }
    console.log(minNumber);
}
minNumber(["3",
"10",
"20",
"30"])
