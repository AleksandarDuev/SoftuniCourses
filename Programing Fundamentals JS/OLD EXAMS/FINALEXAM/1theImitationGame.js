// function theImitatongame(input) {
//   let [message, ...command] = input;
//   let result = command.reduce((acc, curr) => {
//     let [comm, ...rest] = curr.split("|");

//     if (comm === "Decode") {
//       return acc;
//     }
//     if (comm === "ChangeAll") {
//       while (acc.includes(rest[0])) {
//         acc = acc.replace(rest[0], rest[1]);
//       }

//       return acc;
//     }
//     if (comm === "Insert") {
//       let index = Number(rest[0]);
//       let value = rest[1];
//       let start = acc.substring(0, index);
//       let end = acc.substring(index);
//       acc = start + value + end;

//       return acc;
//     }
//     if (comm === "Move") {
//       let index = Number(rest[0]);
//       let start = acc.substring(0, index);
//       let end = acc.substring(index);
//       acc = end + start;

//       return acc;
//     }
//     return acc;
//   }, message);
//   console.log(`The decrypted message is: ${result}`);
// }
// theImitatongame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

function theImitatongame(input) {
  let result = input.shift();
  
  while (input[0] !== "Decode") {
    let [command, ...rest] = input.shift().split("|");
    if (command === "Move") {
      let index = Number(rest[0]);
      let start = result.substring(0, index);
      let end = result.substring(index);
      result = end + start;
    }
    if (command === "Insert") {
      let index = Number(rest[0]);
      let value = rest[1];
      let start = result.substring(0, index);
      let end = result.substring(index);
      result = start + value + end;
    }
    if (command === "ChangeAll") {
      result = result.split(rest[0]).join(rest[1]);   
  }
}
console.log(`The decrypted message is: ${result}`);
}
theImitatongame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
