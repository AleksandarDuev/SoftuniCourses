function modernTimes(text) {
  let result = [];
  text = text.split(" ");
  for (let word of text) {
    if (word[0] === "#" && word.length > 1) {
      let valid = true;
      for (let character of word.substring(1, word.length)) {
        let code = character.charCodeAt(0);
        if (code < 65 || code > 122 || (code >= 91 && code <= 96)) {
          valid = false;
          break;
        }
      }
      if(valid){
          result.push(word.substring(1, word.length));
      }
    }
  }
  for (let word of result){
      console.log(word);
  }
}

modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
