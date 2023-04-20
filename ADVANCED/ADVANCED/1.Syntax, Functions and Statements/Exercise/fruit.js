function fruit(fruit, grams, priceKg) {
  const inKg = grams / 1000;
  const neededSum = inKg * priceKg;
  console.log(`I need $${neededSum.toFixed(2)} to buy ${inKg.toFixed(2)} kilograms ${fruit}.`);
}
fruit("orange", 2500, 1.8);
