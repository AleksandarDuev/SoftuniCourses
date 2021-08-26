function pascalCaseSplitter(list) {
  let splitted = list.split("");
  let result = [];
  let currentWord = "";
  for (let el of splitted) {
    if (el === el.toUpperCase()) {
      if (currentWord.length > 0) {
        result.push(currentWord);
      }
      currentWord = el;
    } else {
      currentWord += el;
    }
  }
  if (currentWord.length > 0) {
    result.push(currentWord);
  }
  console.log(result.join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
