function solve(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let half = Math.ceil(sorted.length / 2);
  let arr1 = sorted.slice(0, half);
  let arr2 = sorted.slice(half, arr.length).reverse();
  let result = [];
  arr1.forEach((el, i) => {
    result.push(arr1[i]);
    result.push(arr2[i]);
  });
  return result;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
