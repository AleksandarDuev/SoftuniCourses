function oddAndEvenSum(number) {
  let num = number.toString();
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < num.length; i++) {
    let current = Number(num[i]);
    if (current % 2 === 0) {
      evenSum += current;
    } else {
      oddSum += current;
    }
  }
  let resultString = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
  return resultString;
}
let result = oddAndEvenSum(1000435);
console.log(result);
