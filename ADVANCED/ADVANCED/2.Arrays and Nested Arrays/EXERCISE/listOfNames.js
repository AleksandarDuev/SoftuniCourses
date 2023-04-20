function listOfNames(array) {
  let resultArray = array.sort((a, b) => a.localeCompare(b));

  for (let i = 1; i <= resultArray.length; i++) {
    console.log(`${i}.${resultArray[i-1]}`);
  }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
