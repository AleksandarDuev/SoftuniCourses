// function replaceRepeatingChars(list) {
//   list = list.split("");
//   const [first, ...rest] = list
//   const result = rest.reduce((acc, current) => {
//     const length = acc.length - 1

//     if (acc[length] !== current) {
//       return [...acc, current];
//     }
//     return acc;
//   }, [first]);
//   console.log(result.join(''));
// }

function replaceRepeatingChars(text) {
  let result = text[0];
  for (let i = 1; i < text.length; i++) {
    if (text[i] !== text[i - 1]) {
      result+= text[i];
    }
  }
  console.log(result);
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
