function barcodeGenerator(input) {
    let initiateNumber = String(input[0]);
    let limitNumber = String(input[1]);
    let result = '';
    for (let i = initiateNumber[0]; i <= limitNumber[0]; i++) {
        for (let a = initiateNumber[1]; a <= limitNumber[1]; a++) {
            for (let b = initiateNumber[2]; b <= limitNumber[2]; b++) {
                for (let c = initiateNumber[3]; c <= limitNumber[3]; c++) {
                    if (i % 2 !== 0 && a % 2 !== 0 & b % 2 !== 0 && c % 2 !== 0) {
                        result += `${i}${a}${b}${c} `;
                    }

                }
            }
        }
    }
    console.log(result);
}

barcodeGenerator(["2345",
    "6789"])
