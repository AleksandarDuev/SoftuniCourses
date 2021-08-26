function activationKeys(input) {
  const [actKey, ...commands] = input;

  const result = commands.reduce((acc, curr) => {
    const [comm, ...rest] = curr.split(">>>");

    if (comm === "Generate") {
      return acc;
    }

    if (comm === "Contains") {
      if (acc.includes(rest[0])) {
        console.log(`${acc} contains ${rest[0]}`);
      } else {
        console.log("Substring not found!");
      }
      return acc;
    }
    if (comm === "Flip") {
      const start = Number(rest[1]);
      const end = Number(rest[2]);
      if (rest[0] === "Upper") {
        const cut = acc.substring(start, end);
        acc = acc.replace(cut, cut.toUpperCase());
        console.log(acc);
      } else if (rest[0] === "Lower") {
        const cut = acc.substring(start, end);
        acc = acc.replace(cut, cut.toLowerCase());
        console.log(acc);
      }
      return acc;
    }
    if (comm === "Slice") {
      const start = Number(rest[0]);
      const end = Number(rest[1]);

      const cut = acc.substring(start, end);
      acc = acc.replace(cut, "");
      console.log(acc);
      return acc;
    }

    return acc;
  }, actKey);
  console.log(`Your activation key is: ${result}`);
}

activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
