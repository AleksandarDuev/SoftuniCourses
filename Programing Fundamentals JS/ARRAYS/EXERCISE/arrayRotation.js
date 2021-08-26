function arrayRotation(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let firstElement = arr[0];
    for (let j = 0; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    let lastElement = arr.length - 1;
    arr[lastElement] = firstElement;
  }
  arr = arr.join(' ');
  console.log(arr);
}
arrayRotation([51, 47, 32, 61, 21], 2);
