function inventory(input) {
  const [list, ...commands] = input;
  const endList = list.split(", "); // newArray

  const result = commands.reduce((acc, curr) => {
    const [comm, item] = curr.split(" - ");

    if (comm === "Craft!") {
      return acc.join(", ");
    }

    if (comm === "Collect") {
      const index = acc.indexOf(item);
      return index !== -1 ? acc : [...acc, item]; // add to Array
    }

    if (comm === "Drop") {
      return acc.filter((i) => i !== item); // check if item exists in array and removes it.
    }
    if (comm === "Combine Items") {
      const [oldItem, newItem] = item.split(":");
      const index = acc.indexOf(oldItem);

      return index !== -1
        ? [...acc.slice(0, index + 1), newItem, ...acc.slice(index + 1)]
        : acc;
    }
    if (comm === "Renew") {
      const filteredList = acc.filter((i) => i !== item);

      return acc.length === filteredList.length ? acc : [...filteredList, item];
    }
  }, endList);
  console.log(result);
}
inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
