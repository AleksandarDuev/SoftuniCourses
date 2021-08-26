// function stringSubstring(word, text) {
//   text = text.toLocaleLowerCase();
//   text = text.split(" ");
//   word = word.toLocaleLowerCase();

//   for (let element of text) {
//     if (element === word) {
//       console.log(word);
//       return;
//     }
//   }
//   console.log(`${word} not found!`);
// }

function stringSubstring(word, text) {
  const t = text.toLocaleLowerCase().split(" ");
  const isExist = t.includes(word.toLocaleLowerCase());
  
  if (isExist) {
    console.log(word);
    return;
  }
  console.log(`${word} not found!`);
}

stringSubstring("JavaScript", "is the best programming language JavaScript");
