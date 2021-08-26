function fitnessCenter(input) {
    let index = 0;
    let visitors = Number(input[index]);
    index++

    let backTraining = 0;
    let chestTraining = 0;
    let legTraining = 0;
    let absTraining = 0;
    let shakeUsers = 0;
    let blockUsers = 0;
    let percentTraining = 0;
    let percentUsers = 0;

    for (i = 0; i < visitors; i++) {
        let action = input[index];
        index++
        switch (action) {
            case "Back": backTraining++; percentTraining++; break;
            case "Chest": chestTraining++; percentTraining++; break;
            case "Legs": legTraining++; percentTraining++; break;
            case "Abs": absTraining++; percentTraining++; break;
            case "Protein shake": shakeUsers++; percentUsers++; break;
            case "Protein bar": blockUsers++; percentUsers++; break;
        }
    }
    console.log(`${backTraining} - back`);
    console.log(`${chestTraining} - chest`);
    console.log(`${legTraining} - legs`);
    console.log(`${absTraining} - abs`);
    console.log(`${shakeUsers} - protein shake`);
    console.log(`${blockUsers} - protein bar`);
    console.log(`${((percentTraining / visitors) * 100).toFixed(2)}% - work out`);
    console.log(`${((percentUsers / visitors) * 100).toFixed(2)}% - protein`);
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])
