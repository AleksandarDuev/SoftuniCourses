function triplesOfLatinLetters(n) {
  n = Number(n);
  let start = 97;
  let end = start + n;
  for (let first = start; first < end; first++) {
    for (let second = start; second < end; second++) {
      for (let third = start; third < end; third++) {
        let firstLetter = String.fromCharCode(first);
        let secondLetter = String.fromCharCode(second);
        let thirdLetter = String.fromCharCode(third);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}

triplesOfLatinLetters(3);
