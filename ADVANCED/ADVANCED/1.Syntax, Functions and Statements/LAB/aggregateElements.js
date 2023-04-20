function aggregateElements(input){
let sum = 0;
let invSum =0;
    for(let i = 0; i < input.length; i++){
        sum+=input[i];
        invSum+=(1/input[i]);
    }
    console.log(sum);
    console.log(invSum);
    console.log(input.join(""));
    
}
aggregateElements([1, 2, 3])