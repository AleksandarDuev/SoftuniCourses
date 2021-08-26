function sumOfTwoNumbers(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let magicN = Number(input[2]);
    let isFound = false;
    let counter = 0;
    for (let i = x; i <= y; i++) {
        for (let z = x; z <= y; z++) {
            counter++;
            if ((i + z) === magicN) {
                console.log(`Combination N:${counter} (${i} + ${z} = ${magicN})`)
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicN}`);
    }
}
sumOfTwoNumbers(["88", 
"888", 
"2000"])


