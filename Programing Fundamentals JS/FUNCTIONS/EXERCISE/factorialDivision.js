function factorialDivision(n1, n2) {
  let result1 = 1;
  let result2 = 1;
  for (let i = 1; i <= n1; i++) {
    result1 *= i;
  }
  for (let i = 1; i <= n2; i++) {
    result2 *= i;
  }

  let total = (result1 / result2).toFixed(2);
  console.log(total);
}
factorialDivision(5, 2);
