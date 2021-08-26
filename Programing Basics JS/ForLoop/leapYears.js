function leapYears(input) {
    let firstYear = Number(input[0]);
    let secondYear = Number(input[1]);
    for (i = firstYear; i <= secondYear; i += 4) {
        console.log(i);
    }
}
leapYears(["1908", "1919"])