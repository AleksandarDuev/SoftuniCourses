function task(input) {
  let [list, ...command] = input;
  let bisquitsList = list.split(", ");

  let result = command.reduce((acc, curr) => {
    let [comm, ...rest] = curr.split(" ");
    if (comm === "Eat") {
      return acc;
    }
    if (comm === "Update-Any") {
      if (acc.includes(rest[0])) {
        let index = acc.indexOf(rest[0]);
        let first = acc.slice(0, index);
        let last = acc.slice(index + 1, acc.length);

        return [...first, "Out of stock", ...last];
      }
    }
    if (comm === "Replace") {
      let index = Number(rest[1]);
      if (index >= 0 && index < acc.length) {
        let first = acc.slice(0, index);
        let last = acc.slice(index + 1, acc.length);

        return [...first, rest[0], ...last];
      }
    }
    if (comm === "Update-Last") {
      let first = acc.slice(0, acc.length - 1);

      return [...first, rest[0]];
    }
    if (comm === "Rearrange") {
      let index = acc.indexOf(rest[0]);

      if (index >= 0 && index < acc.length) {
        let first = acc.slice(0, index);
        let last = acc.slice(index + 1, acc.length);

        return [...first, ...last, rest[0]];
      }
    }
    return acc;
  }, list.split(", "));
  let toPrint = result.filter((item) => item !== "Out of stock");
  console.log(toPrint.join(" "));
}
task([
  "Vanilla, Chocolate, Raspberry, Strawberry, Walnuts, WhiteChocolate, Ordinary, Vegan",
  "Update-Any Chocolate",
  "Replace BBB 3",
  "Update-Last Healthy",
  "Eat",
]);
