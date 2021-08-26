function volleyball(input) {
    let yearType = input[0];
    let hollyDaysCount = Number(input[1]);
    let weekendsToTravel = Number(input[2]);
    weekendsInSofia = 48 - weekendsToTravel;
    gamesInSofia = (weekendsInSofia * 3.0) / 4;
    homeTownGames = weekendsToTravel;
    hollydayGames = (hollyDaysCount * 2.0) / 3;
    totalGames = gamesInSofia + homeTownGames + hollydayGames;

    if (yearType === "leap") {
        totalGames = totalGames * 1.15;
    }
    console.log(Math.floor(totalGames));
}
volleyball(["leap", "5", "2"])
