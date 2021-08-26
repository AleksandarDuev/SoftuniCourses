function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let yearPerecent = Number(input[2] / 100);
    earnedInterest = depositSum * yearPerecent;
    interestForOneMonth = earnedInterest / 12;
    sumToRecieve = depositSum + (depositTerm * interestForOneMonth);
    console.log(sumToRecieve);
}
depositCalculator(["200", "3", "5.7"]);