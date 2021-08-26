function catWalking(input) {
    let walkingMinutes = Number(input[0]);
    let walkingCounts = Number(input[1]);
    let calories = Number(input[2]);
    totalMinutesWalking = walkingCounts * walkingMinutes;
    caloriesBurned = totalMinutesWalking * 5;
    caloriesEaten = calories * 0.5;
    if (caloriesBurned >= caloriesEaten) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    }
    else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }
}
catWalking(["30", "3", "600"]);