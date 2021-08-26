function evenAndOddSubtraction(array) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < array.length; i++) {
    let num = Number(array[i]);
    if (num % 2 === 0) {
      evenSum += num;
    } else if (num % 2 !== 0) {
      oddSum += num;
    }
  }
  console.log(evenSum - oddSum);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
