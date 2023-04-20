function processOddPositions(array) {
  // resultArray = [];
  // for (let i = 1; i < array.length; i += 2) {
  //   resultArray.push(array[i] * 2);                                  //for loop to find odd indexes
  // }

  // return resultArray.reverse().join(" ");

  return array
  .filter((num, i) => i % 2 === 1)
  .map((num) => num * 2)
  .reverse()
  .join(" ");                 // filter, map
 
}
console.log(processOddPositions([10, 15, 20, 25]));
processOddPositions([3, 0, 10, 4, 7, 3]);
