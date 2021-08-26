function aMinerTask(input) {
  let newObject = {};
  for (let i = 0; i < input.length; i += 2) {
    let item = input[i];
    let quantity = Number(input[i + 1]);
    if (!Object.keys(newObject).includes(item)) {
      newObject[item] = quantity;
    } else {
      newObject[item] += quantity;
    }
  }
  let objAsArray = Object.entries(newObject);
  for (let element of objAsArray) {
    let product = element[0];
    let quantity = element[1];
    console.log(`${product} -> ${quantity}`);
  }
}
aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
