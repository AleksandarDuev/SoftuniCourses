function townPopulation(array) {
  let cities = {};
  for (let element of array) {
    let [city, population] = element.split(" <-> ");
    population = Number(population);
    // if (Object.keys(cities).includes(city)) {
      //   cities[city] += population;
      // } else {                                  //alternative
      //   cities[city] = population;
    // }
    if(cities[city]!== undefined) {
      population+= cities[city];
    }
    cities[city] = population;
  }
  for(let city in cities) {                         //print
console.log(`${city} : ${cities[city]}`);
  }
  //let result = Object.entries(cities);
  // for (let [city, population] of result) {    // alternative
  //   console.log(`${city} : ${population}`);
  // }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
console.log("----------------");
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
