function equalSumsEvenOddPositions(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let printLine = "";
    for (let i = n1; i <= n2; i++) {
        let currentNum = "" + i;
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;

            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            printLine += `${i} `;
        }
    }
    console.log(printLine);
}
equalSumsEvenOddPositions(["100000", "100050"])
