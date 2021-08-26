// function passwordReset(input) {
//   let oprations = { TakeOdd, Cut, Substitute };
//   let initialPass = input.shift();

//   while (input[0] !== "Done") {
//     let tokens = input.shift().split(" ");
//     let command = oprations[tokens[0]];
//     initialPass = command(initialPass, tokens[1], tokens[2]);
//   }
//   console.log(`Your password is: ${initialPass}`);

//   function TakeOdd(text) {
//     let result = "";
//     for (i = 1; i < text.length; i += 2) {
//       result += text[i];
//     }
//     console.log(result);
//     return result;
//   }
//   function Cut(text, startIndex, count) {
//     startIndex = Number(startIndex);
//     count = Number(count);
//     let word = text.substring(startIndex, startIndex + count);

//     let result = text.replace(word, "");
//     console.log(result);
//     return result;
//   }
//   function Substitute(text, match, word) {
//     let result = text.split(match).join(word);
//     if (result === text) {
//       console.log("Nothing to replace!");
//     } else {
//       console.log(result);
//     }
//     return result;
//   }
// }
// passwordReset([
//   "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//   "TakeOdd",
//   "Cut 15 3",
//   "Substitute :: -",
//   "Substitute | ^",
//   "Done",
// ]);

function passwordReset(input) {
  const [initialPass, ...commands] = input;

  const result = commands.reduce((acc, current) => {
    const [comm, ...rest] = current.split(" ");
    if (comm === "Done") {
      return acc;
    }
    if (comm === "TakeOdd") {
      let newPass = "";
      for (let i = 1; i < acc.length; i += 2) {
        newPass += acc[i];
      }
      console.log(newPass);
      return newPass;
    }
    if (comm === "Cut") {
      start = Number(rest[0]);
      end = Number(rest[1]);
      let cut = acc.substring(start, start + end);
      acc = acc.replace(cut, "");
      console.log(acc);
      return acc;
    }
    if (comm === "Substitute") {
      let newPass = acc.split(rest[0]).join(rest[1]);
      if (acc === newPass) {
        console.log("Nothing to replace!");
      } else {
        console.log(newPass);
      }
      return newPass;
    }
    return acc;
  }, initialPass);
  console.log(`Your password is: ${result}`);
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
