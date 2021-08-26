function legendaryFarming(str) {
  let items = { shards: 0, motes: 0, fragments: 0 };
  let junks = {};
  str = str.split(" ");
  for (let i = 0; i < str.length; i += 2) {
    let quantity = Number(str[i]);
    let material = str[i + 1].toLowerCase();
    if (items.hasOwnProperty(material)) {
      if (items[material] + quantity < 250) items[material] += quantity;
      else {
        if (material === "shards") console.log(`Shadowmourne obtained!`);
        else if (material === "fragments") console.log(`Valanyr obtained!`);
        else if (material === "motes") console.log(`Dragonwrath obtained!`);
        items[material] += quantity;
        items[material] -= 250;
        break;
      }
    } else {
      !junks.hasOwnProperty(material)
        ? (junks[material] = quantity)
        : (junks[material] += quantity);
    }
  }
  Object.entries(items)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .sort((a, b) => b[1] - a[1])
    .map((x) => console.log(`${x[0]}: ${x[1]}`));
  Object.entries(junks)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((x) => console.log(`${x[0]}: ${x[1]}`));
}
legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
