function tournamentOfChristmas(input) {
    let days = Number(input[0]);
    let index = 1;
    let donations = 0;
    let counterWin = 0;
    let counterlose = 0;

    for (let i = 1; i <= days; i++) {
        let command = input[index++];
        let win = 0;
        let lose = 0;
        let currentDonations = 0;
        while (command !== "Finish") {
            let winOrLose = input[index++];
            switch (winOrLose) {
                case "win": currentDonations += 20;
                    win++;
                    counterWin++; break;
                case "lose": lose++;
                    counterlose++; break;
                case "Finish": break;
            }
            command = input[index++];
        }
        if (win > lose) {
            currentDonations *= 1.1;
            donations += currentDonations;
        } else {
            donations += currentDonations;
            }
        
    }
    if(counterWin > counterlose){
    donations *= 1.2;
    console.log(`You won the tournament! Total raised money: ${donations.toFixed(2)}`);
    }else{
        console.log(`You lost the tournament! Total raised money: ${donations.toFixed(2)}`);
    }
}
tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])

