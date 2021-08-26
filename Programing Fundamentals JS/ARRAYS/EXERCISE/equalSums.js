function equalSums(arr) {
  let isEqualSum = false;
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) {
      let current = arr[j];
      leftSum += current;
    }
    for (let k = i + 1; k < arr.length; k++) {
      let current = arr[k];
      rightSum += current;
    }
    if (leftSum === rightSum) {
      console.log(i);
      isEqualSum = true;
      break;
    }
  }
  if (isEqualSum === false) {
    console.log("no");
  }
}
equalSums([1, 2, 3]);
