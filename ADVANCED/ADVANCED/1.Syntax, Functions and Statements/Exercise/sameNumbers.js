// function sameNumbers(num) {
//   const arr = String(num)
//     .split("")
//     .map((num) => {
//       return Number(num);
//     });
//   let sum = 0;
//   let isEqual;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (arr[i] === arr[0]) {
//       isEqual = true;
//     } else {
//      isEqual =false;
//     }
//   }
//   console.log(isEqual);
//   console.log(sum);
// }
function sameNumbers(num) {
  let isTrue = true;
  let result = 0;
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]);
    if (str[i] !== str[0]) {
      isTrue = false;
    }
  }
  console.log(result);
  console.log(isTrue);
}

sameNumbers(2222222);
sameNumbers(1234);
