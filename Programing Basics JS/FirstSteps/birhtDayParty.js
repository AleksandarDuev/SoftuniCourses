function birthDayParty(input) {
    let hallRent = Number(input[0]);
    let cakePrise = (hallRent * 20) / 100;
    let drinks = cakePrise * 0.55;
    let animator = hallRent / 3;
    let budgetNeeded = hallRent + cakePrise + drinks + animator;
    console.log(budgetNeeded);
}
birthDayParty(["2250"]);