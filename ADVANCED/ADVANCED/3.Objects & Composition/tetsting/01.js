function calorieObject(array) {
  let result = {};

  array.forEach((el, i) => {
    if (i % 2 === 0) {
      result[array[i]] = Number(array[i + 1]);
    }
  });
  return result;
}
