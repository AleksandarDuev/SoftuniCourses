// function smallestTwoNumbers(array) {
//  let x1 = Math.min(...array);

// }
function smallestTwoNumbers(array) {
  let newArray = array.sort((a, b) =>a-b).slice(0, 2);
  console.log(newArray.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
