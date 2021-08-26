// function secretChat(input = []) {
//     let message = input.shift();
//     for (let i = 0; i < input.length; i++) {
//       let line = input[i].split(":|:");
//       if (line[0] === "InsertSpace") {
//         let index = +line[1];
//         let firstPart = message.substring(0, index);
//         let secondPart = message.substring(index);
//         message = firstPart + " " + secondPart;
//         console.log(message);
//       } else if (line[0] === "Reverse") {
//         let sub = line[1];
//         if (message.includes(sub)) {
//           let index = message.indexOf(sub);
//           let secondPart = message
//             .substring(index, index + sub.length)
//             .split("")
//             .reverse()
//             .join("");
//           let firstPart = message.substring(0, index);
//           let thirdPart = message.substring(index + sub.length);
//           message = firstPart + thirdPart + secondPart;
//           console.log(message);
//         } else {
//           console.log("error");
//         }
//       } else if (line[0] === "ChangeAll") {
//         let sub = line[1];
//         let str = line[2];
//         while (message.includes(sub)) {
//           let index = message.indexOf(sub);
//           let part = message.substring(index, index + sub.length);
//           message = message.replace(part, str);
//         }
//         console.log(message);
//       } else if (line[0] === "Reveal") {
//         console.log(`You have a new text message: ${message}`);
//         break;
//       }
//     }
//   }

function secretChat(input) {
  let [message, ...commands] = input;
  let result = commands.reduce((acc, curr) => {
    let [command, ...rest] = curr.split(":|:");
    if (command === "ChangeAll") {
        let sub = rest[0];
        let str = rest[1];
        while (acc.includes(sub)) {
          let index = acc.indexOf(sub);
          let part = acc.substring(index, index + sub.length);
          message = acc.replace(part, str);
          console.log(message);
          return message;
        }
        return acc;
      }
    
    // if (command === "Reverse") {
    //   let sub = rest[0];
    //   if (acc.includes(sub)) {
    //     let index = acc.IndexOf(sub);
    //     let secondPart = acc
    //       .substring(index, index + sub.length)
    //       .split("")
    //       .reverse()
    //       .join("");
    //     let firstPart = acc.substring(0, index);
    //     let thirdPart = acc.substring(index + sub.length);
    //     acc = firstPart + thirdPart + secondPart;
    //     console.log(acc);
    //   } else {
    //     console.log("error");
    //   }
    //   return acc;
    // }
    // if (command === "InsertSpace") {
    //   let index = Number(rest[0]);
    //   let first = acc.substring(0, index);
    //   let second = acc.substring(index);
    //   let newMessage = first + " " + second;
    //   console.log(nemMessage);
    //   return newMessage;
    // }

    
    return acc;
  }, message);
  //console.log(result);
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
