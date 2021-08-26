function theLift(arr) {
  let passengers = Number(arr.shift());
  let wagon = arr.shift().split(" ").map(Number);
  for (let i = 0; i < wagon.length; i++) {
    while (passengers >= 1 && wagon[i] <= 3) passengers-- && wagon[i]++;
  }
  if (passengers > 0)
    console.log(
      `There isn't enough space! ${passengers} people in a queue!\n${wagon.join(
        " "
      )}`
    );
  else if (
    passengers === 0 &&
    !wagon.includes(3) &&
    !wagon.includes(2) &&
    !wagon.includes(1) &&
    !wagon.includes(0)
  )
    console.log(wagon.join(" "));
  else if (passengers <= 0)
    console.log(`The lift has empty spots!\n${wagon.join(" ")}`);
}
theLift(["15", "0 0 0 0 0"]);
