function task(input) {
  const [letters, ...commands] = input;
  let text = letters
  
  for (let i = 0; i < commands.length; i++) {
    const [comm, ...rest] = commands[i].split(" ");
    if (comm === "Move") {
      let index = Number(rest[0]);
      if (index >= 0 && index < text.length) {
        let item = text[index];
        let first = text.substring(0, index);

        let last = text.substring(index + 1, text.length);
        text = first + last + item;
      }
    }

    if (comm === "Insert") {
 
      let index = Number(rest[1])
      let first = text.substring(0, index);
      let last = text.substring(index, text.length);

      text = first + " " + last;
    }

    if (comm === "Reverse") {
      let sub = rest[0];
      if (text.includes(sub)) {
        let indexFirst = Number(text.indexOf(sub));

        let indexLast = Number(indexFirst + sub.length);
        let first = text.substring(0, indexFirst);
        let last = text.substring(indexLast, text.length);
        let cut = text
          .substring(indexFirst, indexLast)
          .split("")
          .reverse()
          .join("");
          text = first + last + cut;
      }
    }

    if (`${comm} ${rest[0]}` === "Exchange Tiles") {
      let lengthToChange = rest[1].length;
      let last = text.substring(lengthToChange);
      
      text = rest[1] + last;
      console.log(text.split("").join(" "));
      return;
    }
    if (commands[i] === "Pass") {
      console.log(text.split("").join(" "));
      return;
    }

    if (comm === "Play") {
      const print = text.split(' ')
      console.log(`You are playing with the word ${print[0]}.`);
      return;
    }
  }
}

task(['XCOBEKA',
'Move 1',
'Reverse EKAC',
'Reverse XOB',
'Insert Space 4',
'Pass it',
'Play'])

