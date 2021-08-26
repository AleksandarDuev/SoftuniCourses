function shoppingList(input) {
  const [list, ...commands] = input;
  const groceryList = list.split("!"); // newArray

  const result = commands.reduce((acc, curr) => {

    const [comm, item, item2] = curr.split(" ");

    const exit = `${comm} ${item}`;
    if (exit === "Go Shopping!") {
      return acc.join(", ");
    }

    if (comm === "Urgent") {
      const index = acc.indexOf(item);
      return index !== -1 ? acc : [item, ...acc]; // add to Array
    }

    if (comm === "Unnecessary") {
      return acc.filter((i) => i !== item); // check if item exists in array and removes it.
    }
    if (comm === "Correct") {
      const index = acc.indexOf(item);

      return index !== -1
        ? [...acc.slice(0, index), item2, ...acc.slice(index + 1)]
        : acc;
    }
    if (comm === "Rearrange") {
      const filteredList = acc.filter((i) => i !== item);
      const index = acc.indexOf(item);

      return index === -1 ? acc : [...filteredList, item];
    }
  }, groceryList);
  console.log(result);
}

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
