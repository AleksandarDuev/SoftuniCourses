function sumNumbersMtoN(n, m) {
  const x = Number(n);
  const y = Number(m);
  let result = 0;
  for (let i = x; i <= y; i++) {
    result += i;
  }
  console.log(result);
}
sumNumbersMtoN("1", "5");
