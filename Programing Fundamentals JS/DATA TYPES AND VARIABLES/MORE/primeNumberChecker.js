function primeNumberChecker(num) {
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num != 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i == 0) {
      console.log("false");
      return;
    }
  }
  console.log("true");
}
primeNumberChecker(12);
