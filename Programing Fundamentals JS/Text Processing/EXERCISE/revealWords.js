function revealWords(words, text) {
  text = ` ${text} `;
  words = words.split(", ");
  for (let word of words) {
    let match = ` ${"*".repeat(word.length)} `;
    word = ` ${word} `;
    text = text.replace(match, word);
  }
  console.log(text.trim());
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
