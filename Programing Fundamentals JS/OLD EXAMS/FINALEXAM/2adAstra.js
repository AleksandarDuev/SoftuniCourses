function adAstra(input) {
  let pattern = /(#|\|)([a-zA-Z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;
  let match = pattern.exec(input);
  let totalCalories = 0;
  let result = [];
  while (match !== null) {
    let foodName = match[2];
    let expDate = match[3];
    let calories = Number(match[4]);
    totalCalories += calories;
    result.push(
      `Item: ${foodName}, Best before: ${expDate}, Nutrition: ${calories}`
    );

    match = pattern.exec(input);
  }
  let days = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${days} days!`);
  for (let line of result) {
    console.log(line);
  }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
