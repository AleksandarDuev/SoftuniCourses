function mergeArrays(arr1, arr2) {
  let sum = 0;
  let concat = 0;
  let newArray = [];
  for (i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      sum = Number(arr1[i]) + Number(arr2[i]);
      newArray.push(sum);
    } else {
      concat = arr1[i] + arr2[i];
      newArray.push(concat);
    }
  }
  newArray = newArray.join(" - ");
  console.log(newArray);
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
