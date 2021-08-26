function reverseAnArrayOfStrings(arr){
let result = ""
    for(let i=arr.length-1; i>=0; i--){
        result += ` ${arr[i]}`;
}
console.log(result);
}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
//reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
//reverseAnArrayOfStrings(['33', '123', '0', 'dd']);