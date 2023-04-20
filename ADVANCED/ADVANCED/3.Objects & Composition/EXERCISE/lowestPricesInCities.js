function lowestPricesInCities(input) {
  const list = {};
  for (const line of input) {
      let [town, product, price] = line.split(' | ');
      price = Number(price);
      if (!list.hasOwnProperty(product)) {
          list[product] = {};
      }
      list[product][town] = price;
  }

  for (const [product, townsAndPrices] of Object.entries(list)) {
      const lowestPrice = Object.entries(townsAndPrices).reduce((acc, v) => acc[1] <= v[1] ? acc : v);
      console.log(`${product} -> ${lowestPrice[1]} (${lowestPrice[0]})`);
  }
}

console.log(
  lowestPricesInCities([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ])
);
