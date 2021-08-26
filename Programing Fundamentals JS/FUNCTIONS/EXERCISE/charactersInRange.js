function charactersInRange(firstCharacter, secondCharacter) {
  let min = firstCharacter.charCodeAt(0);
  let max = secondCharacter.charCodeAt(0);

  if (min > max) {
    min = secondCharacter.charCodeAt(0);
    max = firstCharacter.charCodeAt(0);
  }
  let result = "";
  for (let i = min + 1; i < max; i++) {
    let char = String.fromCharCode(i);
    result += char + " ";
  }
  return result;
}
let result = charactersInRange("a", "d");
console.log(result);
