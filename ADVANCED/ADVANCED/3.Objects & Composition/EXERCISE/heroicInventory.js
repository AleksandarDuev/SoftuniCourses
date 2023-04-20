function heroicInventory(array) {
  const heroData = [];
  for (let hero of array) {
    let [name, level, items] = hero.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    heroData.push({name, level, items});
  }
  console.log(JSON.stringify(heroData));
  
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
