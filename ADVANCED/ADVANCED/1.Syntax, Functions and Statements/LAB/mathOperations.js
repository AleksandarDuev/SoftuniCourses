function mathOperatoins(x, y, operator) {
  if (operator === "+") {
    console.log(x + y);
  } else if (operator === "-") {
    console.log(x - y);
  } else if (operator === "*") {
    console.log(x * y);
  } else if (operator === "/") {
    console.log(x / y);
  } else if (operator === "%") {
    console.log(x % y);
  } else if (operator === "**") {
    console.log(x ** y);
  }
}
mathOperatoins(5, 6, "+");
mathOperatoins(3, 5.5, "*");
