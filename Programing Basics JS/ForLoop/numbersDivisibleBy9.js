function numbersDivisibleBy9(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let sum = 0;
    let allNumbers = "";
    for (let i = x; i <= y; i++) {
        if (i % 9 === 0) {
            sum += i;
        }

    }
    console.log(`The sum: ${sum}`);
    for (let i = x; i <= y; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

numbersDivisibleBy9(["100", "200"])