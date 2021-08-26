function plantDiscovery(input) {
  // parse first part of input, creating plant catalog
  let catalog = {};
  let actions = {
    Rate: rate,
    Update: update,
    Reset: reset,
  };
  let n = Number(input.shift()); // - define how  many elements of the input the catalog contains
  for (let i = 0; i < n; i++) {
    // - for each element create new entry or updating the existing entry.

    let [name, rarity] = input.shift().split("<->");
    catalog[name] = {
      rarity: Number(rarity),
      ratings: [],
      avgRating: 0,
    };
  }

  // parse second part of input, updating the catalog according the commands.
  // - for each remaining input element, untill "Exhibition" is reached, perform a command.
  while (input[0] !== "Exhibition") {
    let [command, params] = input.shift().split(": ");
    let action = actions[command];
    action(params);
  }

  function rate(line) {
    let [name, rating] = line.split(" - ");
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.ratings.push(Number(rating));
      let total = 0;
      for (let rating of plant.ratings) {
        total += rating;
      }
      plant.avgRating = total / plant.ratings.length;
    } else {
      console.log("error");
    }
  }
  function update(line) {
    let [name, rarity] = line.split(" - ");
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.rarity = Number(rarity);
    } else {
      console.log("error");
    }
  }
  function reset(name) {
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.ratings.length = 0;
      plant.avgRating = 0;
    } else {
      console.log("error");
    }
  }

  // sort catalog by
  let sorted = Object.entries(catalog).sort(comparePlants); // - convert the catalog to array

  function comparePlants(a, b) {
    // - pass compare function in a sorting operation

    let rarityA = a[1].rarity;
    let rarityB = b[1].rarity;
    let ratingA = a[1].avgRating;
    let ratingB = b[1].avgRating;

    return rarityB - rarityA || ratingB - ratingA;
  }

  //print result

  console.log("Plants for the exhibition:"); //- print static line
  for (let [name, plant] of sorted) {
    // - for each plant of sorted array, print status.

    console.log( `- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`
    )
  }
}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
