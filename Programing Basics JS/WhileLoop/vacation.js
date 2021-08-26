function vacation(input) {

    let moneyNeeded = Number(input[0]);
    let money = Number(input[1]);
    let index = 2;
    let days = 0;
    let daysSpend = 0;
    while (true) {
        let command = input[index++];
        let amount = Number(input[index]);
        if(command === "spend"){
            daysSpend++;
            days++;
            if(amount > money){
                money = 0;
            }else{
                money -=amount;
            }
        }else if(command === "save"){
            daysSpend = 0;
            days++;
            money += amount;
        }
        if(daysSpend === 5){
            console.log("You can't save the money.");
            console.log(days);
            break;
        }
        if(money >= moneyNeeded){
            console.log(`You saved the money for ${days} days.`);
            break;
        }
        index++;
    }

}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


