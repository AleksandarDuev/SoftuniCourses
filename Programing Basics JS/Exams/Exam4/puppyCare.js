function puppyCare(input){
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
}
puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])

