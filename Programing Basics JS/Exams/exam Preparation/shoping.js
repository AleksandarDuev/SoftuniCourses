function shoping(input) {
    let budget = Number(input[0]);
    let videoCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);
    let videoPrice = videoCount * 250;
    let processsorsPrice = processorsCount * videoPrice * 0.35;
    let ramPrice = ramCount * videoPrice * 0.1;
    let totalprice = videoPrice + processsorsPrice + ramPrice;
    if (videoCount > processorsCount) {
        totalprice *= 0.85;

    }
    if (budget >= totalprice) {
        console.log(`You have ${(budget - totalprice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalprice - budget).toFixed(2)} leva more!`)
    }
}
shoping(["920.45", "3", "1", "1"]);