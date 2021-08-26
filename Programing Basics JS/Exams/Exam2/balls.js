function balls(input) {
    let ballsCount = Number(input[0])
    let points = 0;
    let redPoints = 0;
    let yellowPoints = 0;
    let orangePoints = 0;
    let whitePoints = 0;
    let blackPoints = 0;
    let otherPoints = 0;

    for (i = 1; i <= ballsCount; i++) {
        let color = input[i];
        switch (color) {
            case "red":
                points += 5;
                redPoints++;
                break;
            case "orange":
                points += 10;
                orangePoints++;
                break;
            case "yellow":
                points += 15;
                yellowPoints++;
                break;
            case "white":
                points += 20;
                whitePoints++;
                break;
            case "black":
                points /= 2;
                blackPoints++;
                break;
            default:
                otherPoints++;
                break;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Points from red balls: ${redPoints}`);
    console.log(`Points from orange balls: ${orangePoints}`);
    console.log(`Points from yellow balls: ${yellowPoints}`);
    console.log(`Points from white balls: ${whitePoints}`);
    console.log(`Other colors picked: ${otherPoints}`)
    console.log(`Divides from black balls: ${blackPoints}`);

}
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])

