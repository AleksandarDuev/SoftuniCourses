function solve(arr) {
let result = arr.reduce((acc, curr) =>{
if(acc.length < 1 || acc[acc.length-1]<=curr){
    acc.push(curr);
}
return acc;
},[])
return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));
