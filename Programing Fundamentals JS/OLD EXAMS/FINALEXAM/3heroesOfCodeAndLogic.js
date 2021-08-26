function heroesOfCodeAndLogic(input) {
  let catalog = {};
  let n = input.shift();
  for (let i = 0; i < n; i++) {
    let [name, hitPoints, manaPoints] = input.shift().split(" ");

    catalog[name] = {
      hitPoints: Number(hitPoints),
      manaPoints: Number(manaPoints),
    };
  }

  while (input[0] !== "End") {
    let [command, ...rest] = input.shift().split(" - ");

    if (command === "Heal") {
      let name = rest[0];
      let heal = Number(rest[1]);

      if (catalog[name].hitPoints + heal > 100) {
        let buff = 100 - catalog[name].hitPoints;
        catalog[name].hitPoints = 100;
        console.log(`${name} healed for ${buff} HP!`);
    } else {
        catalog[name].hitPoints += heal;
        console.log(`${name} healed for ${heal} HP!`);
    }
    }
    if (command === "Recharge") {
      let name = rest[0];
      let energy = Number(rest[1]);
      if (catalog[name].manaPoints + energy > 200) {
        let buff = 200 - catalog[name].manaPoints;
        catalog[name].manaPoints = 200;
        console.log(`${name} recharged for ${buff} MP!`);
      } else {
        catalog[name].manaPoints += energy;
        console.log(`${name} recharged for ${energy} MP!`);
      }
    }
    if (command === "TakeDamage") {
      let name = rest[0];
      let damage = Number(rest[1]);
      let attacker = rest[2];
      if (catalog[name].hitPoints - damage > 0) {
        catalog[name].hitPoints -= damage;
        console.log(
          `${name} was hit for ${damage} HP by ${attacker} and now has ${catalog[name].hitPoints} HP left!`
        );
      } else {
        delete catalog[name];
        console.log(`${name} has been killed by ${attacker}!`);
      }
    }
    if (command === "CastSpell") {
      let name = rest[0];
      let spellPoints = Number(rest[1]);
      let spellName = rest[2];
      if (catalog[name].manaPoints - spellPoints >= 0) {
        catalog[name].manaPoints -= spellPoints;
        console.log(
          `${name} has successfully cast ${spellName} and now has ${catalog[name].manaPoints} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${spellName}!`);
      }
    }
  }

  
  let sorted = Object.entries(catalog).sort((a, b) => {
    let hpA = a[1].hitPoints;
    let hpB = b[1].hitPoints;
    let nameA = a[0];
    let nameB = b[0];
    return hpB-hpA || nameA.localeCompare(nameB);
  });
  for(let [name, points] of sorted) {
    console.log(name);
      console.log(`HP: ${points.hitPoints}`);
      console.log(`MP: ${points.manaPoints}`);
  }
}

heroesOfCodeAndLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
console.log("--------------");

heroesOfCodeAndLogic([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
