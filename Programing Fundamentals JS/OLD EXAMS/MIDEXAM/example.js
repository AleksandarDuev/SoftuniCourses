// 1. Array -> Array same length: map
// 2. Array -> Array less elements: filter, reduce
// 3. Array -> One value: reduce
// 4. Array -> Side effect: forEach

const numbers = [1, 2, 3];
numbers.forEach((n) => console.log(n));

const array1 = ["a", "b", "c"];
const reducer = (accumulator, currentValue) => {
  console.log({ accumulator, currentValue });

  return accumulator + currentValue;
};
// 1 + 2 + 3 + 4
const result = array1.reduce(reducer);

console.log({ result });

const array2 = [1, 2, 3, 4, 5];

const result2 = array2.map()