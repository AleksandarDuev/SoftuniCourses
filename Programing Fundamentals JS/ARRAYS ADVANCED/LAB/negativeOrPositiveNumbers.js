function negativeOrPositiveNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.unshift(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join("\n"));
}
negativeOrPositiveNumbers([7, -2, 8, 9]);