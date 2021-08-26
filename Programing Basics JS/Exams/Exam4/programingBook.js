function programingBook(input) {
    let onePagePrice = Number(input[0]);
    let oneHardPrice = Number(input[1]);
    let percentDiscount = Number(input[2]) /100;
    let disainSum = Number(input[3]);
    let totalSumPercent = Number(input[4]) / 100;

    let initalSum = (onePagePrice * 899) + (oneHardPrice * 2);
    initalSum = initalSum -(initalSum *  percentDiscount);
    
    let sum = initalSum + disainSum;



    sum = sum - (sum * totalSumPercent);
    console.log(`Avtonom should pay ${sum.toFixed(2)} BGN.`);

}
programingBook(["0.05",
"1.20",
"40",
"19.99",
"20"])

