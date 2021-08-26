function reverseAnArrayOfNumbers(n, inputArr) {
  let newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(inputArr[i]);
  }
  let output = " ";
  for (let i = newArray.length - 1; i >= 0; i--) {
    output += `${newArray[i]} `;
  }
  console.log(output);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
