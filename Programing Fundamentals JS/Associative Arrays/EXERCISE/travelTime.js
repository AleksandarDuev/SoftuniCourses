function travelTime(input) {
  let destinations = {};
  for (let element of input) {
    let [country, town, cost] = element.split(" > ");
    if (!Object.keys(destinations).includes(country)) {
      destinations[country] = {};
    }
    if (!Object.keys(destinations[country]).includes(town)) {
      destinations[country][town] = Number(cost);
    }
    if (Number(cost) < destinations[country][town]) {
        destinations[country][town] = Number(cost);
    }
    
}
let sortedCountries = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));
  for (let [country, town] of  sortedCountries) {
      let townAsEntries = Object.entries(town).map(x =>`${x[0]} -> ${x[1]}`)
      console.log(`${country} -> ${townAsEntries.join(' ')}`);
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
