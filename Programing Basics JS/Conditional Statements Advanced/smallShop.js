function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let productCount = Number(input[2]);
    if (town === "Sofia") {
        switch (product) {
            case "coffee": console.log(productCount * 0.50); break;
            case "water": console.log(productCount * 0.80); break;
            case "beer": console.log(productCount * 1.20); break;
            case "sweets": console.log(productCount * 1.45); break;
            case "peanuts": console.log(productCount * 1.60); break;
        }
    }
    else if (town === "Plovdiv") {
        switch (product) {
            case "coffee": console.log(productCount * 0.40); break;
            case "water": console.log(productCount * 0.70); break;
            case "beer": console.log(productCount * 1.15); break;
            case "sweets": console.log(productCount * 1.30); break;
            case "peanuts": console.log(productCount * 1.50); break;
        }
    }
    else if (town === "Varna") {
        switch (product) {
            case "coffee": console.log(productCount * 0.45); break;
            case "water": console.log(productCount * 0.70); break;
            case "beer": console.log(productCount * 1.10); break;
            case "sweets": console.log(productCount * 1.35); break;
            case "peanuts": console.log(productCount * 1.55); break;
        }
    }
}
smallShop(["coffee", "Varna", "2"])
