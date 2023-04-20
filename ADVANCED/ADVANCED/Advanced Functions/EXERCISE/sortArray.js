function sortArray(array, method) {
  let ascendingComparator = (a, b) => a - b;
  let descendingComparator = (a, b) => b - a;

  let sortingStrategies = {
    asc: ascendingComparator,
    desc: descendingComparator,
  };

  return array.sort(sortingStrategies[method]);
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))