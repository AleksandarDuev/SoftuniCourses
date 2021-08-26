function triangleOfNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let command = "";
    for (let j = 1; j <= i; j++) {
      command += i + " ";
    }
    console.log(command);
  }
}
triangleOfNumbers(5);
