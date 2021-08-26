function needForSpeed(input) {
  let catalog = {};
  let n = input.shift();
  for (let i = 0; i < n; i++) {
    let [car, mileage, fuel] = input.shift().split("|");

    catalog[car] = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
  }

  while (input[0] !== "Stop") {
    let [command, ...rest] = input.shift().split(" : ");

    if (command === "Drive") {
      let car = rest[0];
      let distance = Number(rest[1]);
      let neededFuel = Number(rest[2]);
      if (catalog[car].fuel < neededFuel) {
        console.log("Not enough fuel to make that ride");
      } else {
        catalog[car].fuel -= neededFuel;
        catalog[car].mileage += distance;
        console.log(
          `${car} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`
        );
      }
      if (catalog[car].mileage >= 100000) {
        console.log(`Time to sell the ${car}!`);
        delete catalog[car];
      }
    }
    if (command === "Refuel") {
      let car = rest[0];
      let addedFuel = Number(rest[1]);

      if (catalog[car].fuel + addedFuel > 75) {
        console.log(`${car} refueled with ${75 - catalog[car].fuel} liters`);
        catalog[car].fuel = 75;
      } else {
        catalog[car].fuel += addedFuel;
        console.log(`${car} refueled with ${addedFuel} liters`);
      }
    }
    if (command === "Revert") {
      let car = rest[0];
      let toDecrease = Number(rest[1]);

      catalog[car].mileage -= toDecrease;

      if (catalog[car].mileage < 10000) {
        catalog[car].mileage = 10000;
      } else {
        console.log(`${car} mileage decreased by ${toDecrease} kilometers`);
      }
    }
  }
  let sorted = Object.entries(catalog).sort((a, b) => {
    let mileageA = a[1].mileage;
    let mileageB = b[1].mileage;
    let carNameA = a[0];
    let carNameB = b[0];
    return mileageB - mileageA || carNameA.localeCompare(carNameB);
  });

  for (let [car, args] of sorted) {
    console.log(
      `${car} -> Mileage: ${args.mileage} kms, Fuel in the tank: ${args.fuel} lt.`
    );
  }
}
needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
