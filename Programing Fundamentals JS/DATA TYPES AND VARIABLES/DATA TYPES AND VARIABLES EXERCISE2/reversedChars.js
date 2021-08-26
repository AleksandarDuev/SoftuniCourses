function reversedChars(p1, p2, p3) {
  let word = [p1, p2, p3].reverse("");
  word = word.join(" ");
  console.log(word);
}
reversedChars("A", "B", "C");
