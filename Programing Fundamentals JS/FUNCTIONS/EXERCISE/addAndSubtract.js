function addAndSubtract(m1, m2, m3) {
  function sum(n1, n2) {
      let result = n1 + n2;
      return result;
  }
  function subtract(n1, n2){
      let result = n1 - n2;
      return result;
  }
  let numbersSum = sum(m1, m2);
  let result = subtract(numbersSum, m3);
  return result;
}
let result = addAndSubtract(23, 6, 10);
console.log(result);
