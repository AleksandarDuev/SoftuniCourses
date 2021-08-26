// function manOWar(array) {
//     let pirateShipStatus = array.shift().split('>').map(Number);
//     let warShipStatus = array.shift().split('>').map(Number);

//     let maxHealth = Number(array.shift());
//     let count = 0;

//     let pirateShipSum = 0;
//     let warShipSum = 0;

//     let command = array.shift();

//     while (command != 'Retire') {
//         let token = command.split(' ');
//         let action = token[0];

//         switch (action) {
//             case 'Fire':
//                 let index = Number(token[1]);
//                 let damageOfPiratеShip = Number(token[2]);
//                 let isIndexValid = false;
//                 if (index >= 0 && index <= warShipStatus.length - 1) {
//                     isIndexValid = true;
//                 }

//                 if (isIndexValid) {
//                     let currentSection = Number(warShipStatus[index]);
//                     currentSection -= damageOfPiratеShip;
//                     if (currentSection <= 0) {
//                         console.log(`You won! The enemy ship has sunken.`);
//                         return
//                     } else {
//                         warShipStatus.splice(index, 1, currentSection);
//                     }
//                 }
//                 break;
//             case 'Defend':
//                 let startIndex = Number(token[1]);
//                 let endIndex = Number(token[2]);
//                 let damageOfWarShip = Number(token[3]);
//                 let areIndexesValid = false;
//                 if ((startIndex >= 0 && startIndex <= pirateShipStatus.length - 1) && (endIndex >= 0 && endIndex <= pirateShipStatus.length - 1)) {
//                     areIndexesValid = true;
//                 }

//                 if (areIndexesValid) {
//                     for (let i = startIndex; i <= endIndex; i++) {
//                         let currentSection = Number(pirateShipStatus[i]);
//                         currentSection -= damageOfWarShip;
//                         if (currentSection <= 0) {
//                             console.log(`You lost! The pirate ship has sunken.`);
//                             return;
//                         } else {
//                             pirateShipStatus.splice(i, 1, currentSection);
//                         }
//                     }
//                 }
//                 break;
//             case 'Repair':
//                 let indexForRepair = Number(token[1]);
//                 let health = Number(token[2])
//                 let isIndexForRepairValid = false;

//                 if(indexForRepair >= 0 && indexForRepair <= pirateShipStatus.length - 1){
//                     isIndexForRepairValid = true;
//                 }
//                 if (isIndexForRepairValid) {
//                     let currentSection = Number(pirateShipStatus[indexForRepair]);

//                     if (currentSection + health > maxHealth) {
//                         let neededHealth = maxHealth - currentSection;
//                         currentSection += neededHealth;
//                         pirateShipStatus.splice(indexForRepair, 1, currentSection);
//                     } else {
//                         currentSection += health;
//                         pirateShipStatus.splice(indexForRepair, 1, currentSection);
//                     }
//                 }
//                 break;
//             case 'Status':
//                 let minHealthBeforeRepair = maxHealth * 0.2;
//                 for (let section of pirateShipStatus) {
//                     if (section < minHealthBeforeRepair) {
//                         count++;
//                     }
//                 }
//                 console.log(`${count} sections need repair.`);
//                 count = 0;
//                 break;
//         }

//         command = array.shift();
//     }

//     for (let section of pirateShipStatus) {
//         pirateShipSum += section;
//     }

//     for (let section of warShipStatus) {
//         warShipSum += section;
//     }

//     console.log(`Pirate ship status: ${pirateShipSum}`);
//     console.log(`Warship status: ${warShipSum}`);

// }

function manOWar(input) {
  let pirateShip = input.shift().split(">");
  
  let warShip = input.shift().split(">");
  
  let maxHealth = Number(input.shift());
 
  let pirateShipSum = 0;

  let warShipSum = 0;
  let count = 0;
  let commands = input.shift();
  
  while (commands !== "Retire") {
    let [command, ...rest] = commands.split(" ");
    
    if ((command = "Fire")) {
      let index = Number(rest[0]);
      let damage = Number(rest[1]);

      if (index >= 0 && index <= warShip.length -1) {
        let currentSection = Number(warShip[index]);
        currentSection -= damage;
        
        if (currentSection <= 0) {
          console.log(`You won! The enemy ship has sunken.`);
          return
        } else {
          warShip.splice(index, 1, currentSection);
          
        }
      }
    }
    if ((command = "Defend")) {
      let startIndex = Number(rest[0]);
      let endIndex = Number(rest[1]);
      let damage = Number(rest[2]);
      if (
        (startIndex > -1 &&
        startIndex < pirateShip.length) &&
        (endIndex > -1 &&
        endIndex < pirateShip.length)
      ) {
        for (let i = startIndex; i <= endIndex; i++) {
          let currentSection = Number(pirateShip[i]);
          currentSection -= damage;
          if (currentSection <= 0) {
            console.log("You lost! The pirate ship has sunken.");
            return;
          } else {
            pirateShip.splice(i, 1, currentSection);
          }
        }
      }
    }
    if ((command = "Repair")) {
      let index = Number(rest[0]);
      let repairEnergy = Number(rest[1]);
      if (index > -1 && index < pirateShip.lenght) {
        let currentSection = Number(pirateShip[index]);

        if (currentSection + repairEnergy > maxHealth) {
          let neededHealth = maxHealth - currentSection;
          currentSection += neededHealth;
          pirateShip.splice(index, 1, currentSection);
        } else {
          currentSection += repairEnergy;
          pirateShip.splice(index, 1, currentSection);
        }
      }
    }
    if (command === "Status") {
      let minHealthBeforeRepair = maxHealth * 0.2;
      for (let section of pirateShip) {
        if (section < minHealthBeforeRepair) {
          count++;
        }
      }
      console.log(`${count} sections need repair.`);
      count = 0;
      break;
    }

    commands = input.shift();
  }
  for (let section of pirateShip) {
    pirateShipSum += section;
    
  }

  for (let section of warShip) {
    warShipSum += section;
  }

  console.log(`Pirate ship status: ${pirateShipSum}`);
  console.log(`Warship status: ${warShipSum}`);
}
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
