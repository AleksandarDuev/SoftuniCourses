function biggestElement(arr) {
  let n = Number.MIN_SAFE_INTEGER;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > n) {
        n = arr[i][j];
      }
    }
  }
  console.log(n);
  return n;
}
biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )
