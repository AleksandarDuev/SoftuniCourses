function printEveryNelement(arr, n) {
  // let result = [];
  //     for(let i = 0; i < arr.length; i+=n) {
  // result.push(arr[i])                                  //for loop
  // }
  // return result;
  let result = arr.filter((el, i) => i % n === 0);         // use filter
   return result;
}
console.log(printEveryNelement(["5", "20", "31", "4", "20"], 2));
printEveryNelement(["dsa", "asd", "test", "tset"], 2);
