function petShop(input) {
    let dogCount = Number(input[0]);
    let otherAnimalscount = (input[1]);
    let dogFood = dogCount * 2.50;
    let otherFood = otherAnimalscount * 4;
    let totalSum = dogFood + otherFood
    console.log(totalSum)
}
petShop(["5", "4"]);