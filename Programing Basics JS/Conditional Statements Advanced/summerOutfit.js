function summerOutfit(input) {
    let degree = Number(input[0]);
    let timeOfTheDay = input[1];
    let outfit;
    let shoes;
    if (degree >= 10 && degree <= 18) {
        if (timeOfTheDay === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (timeOfTheDay === "Afternoon") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degree > 18 && degree <= 24) {
        if (timeOfTheDay === "Morning") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (timeOfTheDay === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    else if (degree >= 25) {
        if (timeOfTheDay === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (timeOfTheDay === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["16", "Morning"])
