function agencyProfita(input) {
    let companyName = input[0];
    let adultTickets = Number(input[1]);
    let childrenTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let taxPrice = Number(input[4]);
    let childrenTicketPrice = adultTicketPrice * 0.3;
    let totalAdultPrice = adultTicketPrice + taxPrice;
    let totalChildrenPrice = childrenTicketPrice + taxPrice;
    totalcash = (totalAdultPrice * adultTickets) + (totalChildrenPrice * childrenTickets);
    profit = totalcash * 0.2;
    console.log(`The profit of your agency from ${companyName} tickets is ${(profit).toFixed(2)} lv.`);
}
agencyProfita(["WizzAir", "15", "5", "120", "40"]);

