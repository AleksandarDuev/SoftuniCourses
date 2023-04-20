function pieceOfPie(arr, str1, str2) {
  
  const isIn1 = arr.indexOf(str1);
  const isIn2 = arr.indexOf(str2);
  const resultArray = arr.slice(isIn1, isIn2 +1);         // works with splice as well!!
  
  return resultArray;
}

console.log(pieceOfPie(
 [
    "Sugar Cream Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Pumpkin Pie"
  ],
  "Sugar Cream Pie",
  "Pumpkin Pie",
));
console.log(pieceOfPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
));
