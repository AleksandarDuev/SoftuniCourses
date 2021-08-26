function foodForPets(input) {
    const [daysCount, totalFood, ...days] = input;
    let bisquits = 0;
    let totalDogFood = 0;
    let totalCatFood = 0;
    
    for (let i = 0; i < daysCount * 2; i += 2) {
        let dogDay = Number(days[i]);
        let catDay = Number(days[i + 1]);
        totalDogFood += dogDay;
        totalCatFood += catDay;

        if (daysCount % 3 === 0) {
            bisquits = ((dogDay + catDay) * 0.1);

        }
    }
    let eatenFood = totalDogFood + totalCatFood;

    console.log(`Total eaten biscuits: ${Math.round(bisquits)}gr.`);
    console.log(`${((eatenFood / totalFood) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((totalDogFood / eatenFood) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((totalCatFood / eatenFood) * 100).toFixed(2)}% eaten from the cat.`);

}
foodForPets(["3","1000", "300", "20", "100", "30", "110", "40"]);



