function sorting(numsArray) {
  let newArray = [];
  let numsLength = numsArray.length;
  for (let i = 0; i < numsLength; i++) {
    let currentNumber;
    if (i % 2 === 0) {
      currentNumber = Math.max(...numsArray);
    } else {
      currentNumber = Math.min(...numsArray);
    }
    newArray.push(currentNumber);
    numsArray.splice(numsArray.indexOf(currentNumber), 1);
  }
  console.log(newArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
