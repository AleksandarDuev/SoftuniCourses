function extractIncreasingSubsequenceFromArray(array) {
  // let newArray = [array[0]];
  // let biggest = array[0];
  // for (let i = 1; i < array.length; i++) {                       // for loop
  //     biggest = array[i];
  //     newArray.push(biggest);
  //   }
  // }

  // return newArray;

  const result = array.reduce(
    (acc, curr) => {
      if (acc.length===0 || acc[acc.length - 1] <= curr) {
        acc.push(curr);
      }
      return acc;
    },
    []
  );

  return result;
}
console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);
// extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
