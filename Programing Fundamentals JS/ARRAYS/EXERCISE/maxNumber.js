function maxNumber(array) {
  let top = [];
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let isTop = true;
    for (let j = i + 1; j < array.length; j++) {
      let nextNumber = array[j];
      if (nextNumber >= current) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      top.push(current);
    }
  }
  console.log(top.join(" "));
}

maxNumber([41, 41, 34, 20]);
