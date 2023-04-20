function equalNeighbors(array) {
  let counter = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j < array[i].length; j++) {
      if (array[i][j] == array[i + 1][j]) {
        counter++;
      }

      if (array[i][j] == array[i][j - 1]) {
        counter++;
      }
    }
  }

  for (let i = 0; i < array[array.length - 1].length; i++) {
    if (array[array.length - 1][i] == array[array.length - 1][i + 1]) {
      counter++;
    }
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i][0] == array[i + 1][0]) {
      counter++;
    }
  }

return counter;
}
equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
