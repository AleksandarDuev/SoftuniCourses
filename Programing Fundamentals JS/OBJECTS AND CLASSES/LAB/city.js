function city(town) {
  let entries = Object.entries(town);
  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
