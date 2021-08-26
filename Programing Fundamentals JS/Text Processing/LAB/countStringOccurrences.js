function countStringOccurrences(sentance, searchedWord) {
  let words = sentance.split(" ");
  let counter = 0;
  for (let word of words) {
    if (word === searchedWord) {
      counter += 1;
    }
  }
  console.log(counter);
}

countStringOccurrences("This is a word and it also is a sentence", "is");
