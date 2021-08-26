function easterShop(input) {
    let totalEggs = Number(input[0]);
    let index = 1;
    let command = input[index];
    let eggsCount = (input[index + 1]);
    index++;
    let soldEggs = 0;
    while (command !== "Close") {
        if (command === "Buy" && eggsCount > totalEggs) {
            break;
        }
        if (command === "Buy") {
            soldEggs++;
            totalEggs -= eggsCount;
            if (totalEggs === 0) {
                break;
            }
        } else if (command === "Fill") {
            totalEggs += eggsCount;
        }
        command = input[index];
        eggsCount = input[index + 1];
        index++;
    }
    if(command === "Close"){
        console.log("Store is closed!");
        console.log(`${soldEggs} eggs sold`);
    }else{
        console.log("Not enough eggs in store!");
        console.log(`You can buy only ${totalEggs}.`);
    }
}

easterShop(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"])
