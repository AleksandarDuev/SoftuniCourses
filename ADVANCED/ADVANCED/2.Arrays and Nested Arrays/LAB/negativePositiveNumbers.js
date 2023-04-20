function negativePositiveNumbers(arr){
let newArray = [];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>=0){
//         newArray.push(arr[i]);
//     }else{
//         newArray.unshift(arr[i]);
//     }

// }
// console.log(newArray);
for(let n of arr){
    if(n>=0){
                newArray.push(n);
            }else{
                newArray.unshift(n);                 // for of loop possible.
            }
}
console.log(newArray);
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);