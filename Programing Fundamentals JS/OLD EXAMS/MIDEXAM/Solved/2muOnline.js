// function muOnline(input) {
//   const rooms = input.split("|");

//   const final = rooms.reduce(
//     (acc, room, i) => {
//       const index = i + 1;
//       const [command, valueString] = room.split(" ");
//       const { health, bitcoin } = acc;

//       const value = Number(valueString);

//       if (health === 0) return acc;

//       const actions = {
//         potion: () => {
//           const healthAndHeal = health + value;
//           const heal = healthAndHeal > 100 ? 100 - health : value;
//           const newHealth = healthAndHeal > 100 ? 100 : healthAndHeal;

//           console.log(`You healed for ${heal} hp.`);
//           console.log(`Current health: ${newHealth} hp.`);

//           return { health: newHealth, bitcoin, room: index };
//         },
//         chest: () => {
//           const newBitcoin = bitcoin + value;
//           console.log(`You found ${value} bitcoins.`);

//           return { health, bitcoin: newBitcoin, room: index };
//         },
//       };

//       const monster = () => {
//         const newHealth = health - value;
//         if (newHealth > 0) {
//           console.log(`You slayed ${command}.`);
//           return { health: newHealth, bitcoin, room: index };
//         }

//         console.log(`You died! Killed by ${command}.`);
//         return { health: 0, bitcoin, room: index };
//       };

//       const actionFn = actions[command] || monster;

//       return actionFn();
//     },
//     { health: 100, bitcoin: 0 }
//   );

//   const { health, bitcoin, room } = final;

//   if (health <= 0) {
//     console.log(`Best room: ${room}`);
//     return;
//   }

//   console.log("You've made it!");
//   console.log(`Bitcoins: ${bitcoin}`);
//   console.log(`Health: ${health}`);
// }
function muOnline(input) {
  let rooms = input.shift().split('|');
  let health = 100;
  let bitcoins = 0;
  let notDead = true;
  for (let i = 0; i < rooms.length; i++) {
      let command = rooms[i];
      let splitted = command.split(' ');
      if (splitted[0] === 'potion') {
          let addHealth = Number(splitted[1]);
          let newHealth = (health + addHealth > 100) ? 100 : health + addHealth;
          console.log(`You healed for ${newHealth - health} hp.`);
          health = newHealth;
          console.log(`Current health: ${health} hp.`);
      } else if (splitted[0] == 'chest') {
          bitcoins += Number(splitted[1]);
          console.log(`You found ${splitted[1]} bitcoins.`);
      } else {
          let attack = Number(splitted[1]);
          health -= attack;
          if (health <= 0) {
              console.log(`You died! Killed by ${splitted[0]}.`);
              console.log(`Best room: ${i + 1}`);
              notDead = false;
              break;
          } else if (health > 0) {
              console.log(`You slayed ${splitted[0]}.`);
          }
      }
      if (!notDead) {
          break;
      }
  }
  if (notDead) {
      console.log(`You've made it!`);
      console.log(`Bitcoins: ${bitcoins}`);
      console.log(`Health: ${health}`);
  }
}
//       constmuOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
