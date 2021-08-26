function repeatString(string, n) {
  let newString = "";
  for (let i = 0; i < n; i++) {
    newString += string;
  }
  console.log(newString);
}
repeatString("abc", 3);
