function sortingNumbers(array) {
  let sorted = array.sort((a, b) => a - b);
  let half = Math.ceil(sorted.length / 2);
  let array1 = sorted.splice(0, half);
  let array2 = sorted.splice(-half).reverse();
  let newArray = [];
 
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
    newArray.push(array2[i]);
  }
 
  return newArray;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, -7]);
