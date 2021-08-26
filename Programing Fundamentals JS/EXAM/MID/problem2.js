function parts(input) {
  const [list, ...commands] = input;
  const weaponParts = list.split("|");
  const result = commands.reduce((acc, curr) => {
    const [comm, item, item2] = curr.split(" ");
    // console.log({ comm, item, item2, curr, acc });
    if (comm === "Done") {
      return acc;
    }
    if (comm === "Add") {
      const index = Number(item2);

      if (acc.length > index && index >= 0) {
        return [...acc.slice(0, index), item, ...acc.slice(index)];
      }
      return acc;
    }
    if (comm === "Remove") {
      const index = Number(item);
      if (acc.length > index && index >= 0) {
        return [...acc.slice(0, index), ...acc.slice(index+1)];
      }
      return acc;
    }
    if (comm === "Check" && item === "Even") {
      const even = acc.filter((p, i) => i % 2 === 0);
      console.log(even.join(" "));
      return acc;
    }
    if (comm === "Check" && item === "Odd") {
      const odd = acc.filter((p, i) => i % 2 === 1);
      console.log(odd.join(" "));
      return acc;
    }
  }, weaponParts);
  console.log(`You crafted ${result.join("")}!`);
}
parts(["pa|Do|ha|mm|er", "Remove 0", "Add om 1", "Check Even", "Done"]);
