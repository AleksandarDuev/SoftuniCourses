function addAndSubtract(array) {
  let arraySum = 0;
  let arraySum2 = 0;
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let newNumber = 0;
    if (current % 2 === 0) {
      newNumber = current + i;
      array[i] = newNumber;
    } else {
      newNumber = current - i;
      array[i] = newNumber;
    }
    arraySum += current;
    arraySum2 += newNumber;
  }
  console.log(array);
  console.log(arraySum);
  console.log(arraySum2);
}
addAndSubtract([5, 15, 23, 56, 35]);
