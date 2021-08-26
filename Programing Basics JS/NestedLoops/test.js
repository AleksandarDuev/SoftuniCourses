function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++
    let winDays = 0;
    let looseDays = 0;
    let totalProfit = 0;
    for (i = 1; i <= days; i++) {
        let currentDayWin = 0;
        let currentdayloose = 0;
        let currentdayProfit = 0;
        while (true) {
            let sportType = input[index];
            index++
            if (sportType === "Finish") {
                break;
            }
            let result = input[index];
            index++;
            if (result === "win") {
                currentDayWin++
                currentdayProfit += 20;
            } else if (result === "lose") {
                currentdayloose++

            }
            sportType = input[index];
            index++
            result = input[index];
            index++

        }
        if (currentDayWin > currentdayloose) {
            currentdayProfit *= 1.1;
            winDays++;

        } else {
            looseDays++;
        }
        totalProfit += currentdayProfit;
    }
    if (winDays > looseDays) {
        totalProfit *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalProfit.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalProfit.toFixed(2)}`)
    }


}
tournamentOfChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])