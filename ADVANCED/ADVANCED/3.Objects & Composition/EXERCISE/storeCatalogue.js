function sotrageCatalogue(array) {
  let list = {};
  for (let line of array) {
    let [product, price] = line.split(" : ");
    let firstLetter = product[0];
    if (!list[firstLetter]) {
      list[firstLetter] = [];
    }
    list[firstLetter].push({ product, price: Number(price) });
  }
  let result = [];

  Object.entries(list)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((entry) => {
      let values = entry[1]
        .sort((a, b) => a.product.localeCompare(b.product))
        .map((item) => `  ${item.product}: ${item.price}`)
        .join("\n");

      let string = `${entry[0]}\n${values}`;
      result.push(string);
    });
  return result.join("\n");
}
console.log(
  sotrageCatalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ])
);
