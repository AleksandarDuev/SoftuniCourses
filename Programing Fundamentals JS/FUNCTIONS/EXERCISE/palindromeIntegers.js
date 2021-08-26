function palindromeIntegers(array) {
  for (number of array) {
    let numAsString = number.toString();
    let reversedNum = numAsString.split("").reverse().join("");
    if (numAsString === reversedNum) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
