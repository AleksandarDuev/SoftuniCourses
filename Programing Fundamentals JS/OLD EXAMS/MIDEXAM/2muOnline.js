function muOnline(input) {
  const rooms = input.split("|");

  const final = rooms.reduce(
    (acc, room, i) => {
      const index = i + 1;
      const [command, valueString] = room.split(" ");
      const { health, bitcoin } = acc;

      const value = Number(valueString);

      if (health === 0) return acc;

      const actions = {
        potion: () => {
          const healthAndHeal = health + value;
          const heal = healthAndHeal > 100 ? 100 - health : value;
          const newHealth = healthAndHeal > 100 ? 100 : healthAndHeal;

          console.log(`You healed for ${heal} hp.`);
          console.log(`Current health: ${newHealth} hp.`);

          return { health: newHealth, bitcoin, room: index };
        },
        chest: () => {
          const newBitcoin = bitcoin + value;
          console.log(`You found ${value} bitcoins.`);

          return { health, bitcoin: newBitcoin, room: index };
        },
      };

      const monster = () => {
        const newHealth = health - value;
        if (newHealth > 0) {
          console.log(`You slayed ${command}.`);
          return { health: newHealth, bitcoin, room: index };
        }

        console.log(`You died! Killed by ${command}.`);
        return { health: 0, bitcoin, room: index };
      };

      const actionFn = actions[command] || monster;

      return actionFn();
    },
    { health: 100, bitcoin: 0 }
  );

  const { health, bitcoin, room } = final;

  if (health <= 0) {
    console.log(`Best room: ${room}`);
    return;
  }

  console.log("You've made it!");
  console.log(`Bitcoins: ${bitcoin}`);
  console.log(`Health: ${health}`);
}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
