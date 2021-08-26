function careOfAPuppy(input) {
    let totalFood = Number(input[0]);
    let totalFoodInGrams = totalFood * 1000;
    let totalEaten = 0;
    let index = 1;
    let command = input[index];
    while (command !== "Adopted") {
        let dayFood = Number(command);
        totalEaten += dayFood;


        index++;
        command = input[index];
    }


    if (totalFoodInGrams >= totalEaten) {
        console.log(`Food is enough! Leftovers: ${totalFoodInGrams - totalEaten} grams.`);
    } else {
        console.log(`Food is not enough. You need ${totalEaten - totalFoodInGrams} grams more.`);
    }
}
careOfAPuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"
]);