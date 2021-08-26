function printAndSum(num1, num2) {
  let sum = 0;
  let command = "";
  for (let i = num1; i <= num2; i++) {
    sum += i;
    command += i + " ";
  }
  console.log(command);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
