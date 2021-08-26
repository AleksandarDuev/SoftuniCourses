// function treasureHunt(arr) {
//     let chest = arr.shift().split('|');

//     arr.forEach(row => {
//         let [command, ...args] = row.split(' ');
//         if (command === 'Yohoho!') {
//             if (chest.length !== 0) {
//                 let averageGain = 0;
//                 chest.forEach(item => averageGain += item.length);
//                 console.log(`Average treasure gain: ${(averageGain/chest.length).toFixed(2)} pirate credits.`);
//             } else console.log(`Failed treasure hunt.`);
//         } else if (command === 'Loot') loot(...args);
//         else if (command === 'Drop') drop(...args);
//         else if (command === 'Steal') steal(...args);
//     })

//     function loot(...items) {
//         items.forEach(item => {
//             if (!chest.includes(item)) chest.unshift(item);
//         })
//     }

//     function drop(index) {
//         if (index < chest.length && index > -1) {
//             let item = chest.splice(index, 1);
//             chest.push(item);
//         }
//     }

//     function steal(count) {
//         if (count > chest.length) count = chest.length;
//         let stolen = chest.splice(chest.length - count, count);
//         console.log(stolen.join(', '));
//     }
// }
function treasureHunt(arr) {
    let [chest, ...command] = arr;
    let newChest = chest.split("|");
  
    let result = command.reduce((acc, curr) => {
      let [comm, ...rest] = curr.split(" ");
  
      if (comm === "Yohoho!") {
        return acc;
      }
      
      if (comm === "Loot") {
        for (let item of rest) {
          if (!acc.includes(item)) {
            acc.unshift(item);
          }
        }
        return acc;
      }
      
      if (comm === "Drop") {
        let index = Number(rest[0]);
        if (index < acc.length && index > -1) {
          let cut = acc.splice(index, 1).join();
          acc.push(cut);
        }
        return acc;
      }
      
      if (comm === "Steal") {
        let index = Number(rest[0]);
  
        if(index >= acc.length) {
          console.log(acc.join(", "));
  
          return [];
        }
  
        let indexTo = acc.length - index;
        
        let cut = acc.slice(-index);
        console.log(cut.join(", "));
  
        return acc.slice(0, indexTo);
      }
    }, newChest);
   
    let avg = 0;
    
    for (let item of result) {
      if (result.length > 0) {
        avg += item.length;
      }
    }
    
    if (result.length > 0) {
      console.log(
        `Average treasure gain: ${(avg / result.length).toFixed(
          2
        )} pirate credits.`
      );
    } else {
      console.log("Failed treasure hunt.");
    }
  }

treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
