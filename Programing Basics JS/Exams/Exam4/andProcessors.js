function andProcessors(input) {
    processorsCount = Number(input[0]);
    workersCount = Number(input[1])
    days = Number(input[2]);
    let hours = 8;
    let processorsMade = workersCount * days * hours;
    let total = Math.floor(processorsMade / 3);
    let price = 110.10;
    let totalPrice = total * price;
    let allPrice = processorsCount * price;

    if(totalPrice < allPrice){
        let diff = allPrice-totalPrice;
        console.log(`Losses: -> ${diff.toFixed(2)} BGN`)

    }else if(totalPrice >= allPrice){
        diff = totalPrice - allPrice;
        console.log(`Profit: -> ${diff.toFixed(2)} BGN`)
    }



}
andProcessors(["500",
    "8",
    "20"])
