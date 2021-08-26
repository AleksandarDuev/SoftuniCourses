function simpleCalculator(x, y, operator) {
  switch (operator) {
    case "multiply":
      console.log(x * y);
      break;
    case "divide":
      console.log(x / y);
      break;
    case "add":
      console.log(x + y);
      break;
    case "subtract":
      console.log(x - y);
      break;
  }
}
simpleCalculator(5, 5, "multiply");
