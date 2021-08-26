function easterCompetittion(input) {
    let index = 0;
    let cakeCount = Number(input[index]);
    index++;
    let winBakerName = "";
    let winBakerPoints = 0;
    for (let i = 0; i < cakeCount; i++) {
        let bakerName = input[index];
        index++;
        let currentPoints = 0;
        let command = input[index];
        index++
        while (command !== "Stop") {
            let points = Number(command);
            currentPoints += points;
            command = input[index];
            index++
        }
        console.log(`${bakerName} has ${currentPoints} points.`);
        if (currentPoints > winBakerPoints) {
            winBakerName = bakerName;
            winBakerPoints = currentPoints;
            console.log(`${winBakerName} is the new number 1!`);
        }
    }
    console.log(`${winBakerName} won competition with ${winBakerPoints} points!`);

}
easterCompetittion(["3",
    "Chef Manchev",
    "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"])
