function train(arr){
let wagons = arr.shift().split(" ").map(x => Number(x));
let maxCapacity = Number(arr.shift());
for(let command of arr){
    
    let token = command.split(" ");
    
    if(token[0] === "Add"){
        let passengers = Number(token[1]);
        wagons.push(passengers);
        
    }else{
        let passengers = Number(token[0]);
        for(let i = 0; i < wagons.length; i++){
            if(wagons[i] + passengers <= maxCapacity){
                wagons[i] += passengers;
                break;
            }
        }
    }
}
console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);