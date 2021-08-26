function cleverLily(input) {
    let age = Number(input[0]);
    let laundryMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let sumOfToys = 0;
    let sumOfMoney = 0;
    let currentMoney = 10;
    let totalMoney = 0;   
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0){
            sumOfMoney += currentMoney;
            sumOfMoney -= 1;
            currentMoney +=10;
        }else{
            sumOfToys++;
        }
        totalMoney = sumOfMoney + (sumOfToys * toyPrice);
        
    }
    if(totalMoney >= laundryMachinePrice){
        console.log(`Yes! ${(totalMoney - laundryMachinePrice).toFixed(2)}`);
    }else{
        console.log(`No! ${(laundryMachinePrice - totalMoney).toFixed(2)}`)
    }
}
cleverLily(["21", "1570.98", "3"])