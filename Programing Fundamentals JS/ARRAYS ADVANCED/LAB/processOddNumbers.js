function processOddNumbers(arr) {
  let result = arr
    .filter((arr, x) => x % 2 == 1)
    .map((x) => 2 * x)
    .reverse();
  console.log(result.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
