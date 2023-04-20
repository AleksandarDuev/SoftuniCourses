function diagonalSums(array) {
  let sum1 = 0;
  let sum2 = 0;
  for (var i = 0; i < array.length; i++) {
    sum1 += array[i][i];
    sum2 += array[i][array.length - i - 1];
    
  }
  console.log(sum1, sum2);
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
console.log("---------------------");
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
