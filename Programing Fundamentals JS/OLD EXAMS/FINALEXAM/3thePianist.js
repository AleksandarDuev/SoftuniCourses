function thePianist(input) {
  // parse initial catalog;
  let catalog = {};
  let n = Number(input.shift());
  for (let i = 0; i < n; i++) {
    let [piece, composer, tonality] = input.shift().split("|");
    catalog[piece] = {
      composer,
      tonality,
    };
  }

  //parse commands;
  while (input[0] !== "Stop") {
    let tokens = input.shift().split("|");
    let command = tokens[0];
    let pieceName = tokens[1];
    if (command === "Add") {
      if (catalog[pieceName] !== undefined) {
        console.log(`${pieceName} is already in the collection!`);
      } else {
        catalog[pieceName] = {
          composer: tokens[2],
          tonality: tokens[3],
        };
        console.log(
          `${pieceName} by ${tokens[2]} in ${tokens[3]} added to the collection!`
        );
      }
    } else if (command === "Remove") {
      if (catalog[pieceName] === undefined) {
        console.log(
          `Invalid operation! ${pieceName} does not exist in the collection.`
        );
      } else {
        delete catalog[pieceName];
        console.log(`Successfully removed ${pieceName}!`);
      }
    } else if (command === "ChangeKey") {
      if (catalog[pieceName] === undefined) {
        console.log(
          `Invalid operation! ${pieceName} does not exist in the collection.`
        );
      } else {
        catalog[pieceName].tonality = tokens[2];
        console.log(`Changed the key of ${pieceName} to ${tokens[2]}!`);
      }
    }
  }

  // sort catalog;
  let sorted = Object.entries(catalog).sort((a, b) => {
    let nameA = a[0];
    let nameB = b[0];
    let composerA = a[1].composer;
    let composerB = b[1].composer;

    return nameA.localeCompare(nameB) || composerA.localeCompare(composerB);
  });

  // print sorted;
  for (let [name, piece] of sorted) {
    console.log(
      `${name} -> Composer: ${piece.composer}, Key: ${piece.tonality}`
    );
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
