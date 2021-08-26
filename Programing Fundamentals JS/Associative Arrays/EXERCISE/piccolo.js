function piccolo(input) {
  let carList = [];
  for (let command of input) {
    let [direction, car] = command.split(", ");
    if (direction === "IN") {
      if (!carList.includes(car)) {
        carList.push(car);
      }
    } else{
      if(carList.includes(car)){
        carList.splice(carList.indexOf(car), 1);
      }
    }
  }
  let sortedList = carList.sort((a, b) => a.localeCompare(b));
  if (sortedList.length > 0) {
    console.log(sortedList.join("\n"));
  } else {
    console.log("Parking Lot is Empty");
  }
}
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
