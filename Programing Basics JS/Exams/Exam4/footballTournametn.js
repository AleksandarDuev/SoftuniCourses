function footballTournament(input) {
    let name = input[0];
    let games = Number(input[1]);
    let w = 0;
    let d = 0;
    let l = 0;
    let points = 0;
    let gamesPlayed = 0;
    if (games < 1) {
        console.log(`${name} hasn't played any games during this season.`);
    }

    for (let i = 2; i <= games +1; i++) {
     
        let currentGame = input[i];
        switch (currentGame) {
            case "W": w++; points += 3; gamesPlayed++; break;
            case "D": d++; points++; gamesPlayed++; break;
            case "L": l++; gamesPlayed++; break;

        }
        console.log(currentGame);


    }

}


footballTournament(["Liverpool",
    "10",
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W"])
