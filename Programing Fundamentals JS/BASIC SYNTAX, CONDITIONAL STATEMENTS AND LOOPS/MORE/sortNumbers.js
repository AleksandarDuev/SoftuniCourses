function sortNumbers(p1, p2, p3) {
  if (p1 > p2 && p1 > p3) {
    console.log(p1);
    if (p2 > p3) {
      console.log(p2);
      console.log(p3);
    } else {
      console.log(p3);
      console.log(p2);
    }
  }
  if (p2 > p1 && p2 > p3) {
    console.log(p2);
    if (p1 > p3) {
      console.log(p1);
      console.log(p3);
    } else {
      console.log(p3);
      console.log(p1);
    }
  }
  if (p3 > p1 && p3 > p2) {
    console.log(p3);
    if (p1 > p2) {
      console.log(p1);
      console.log(p2);
    } else {
      console.log(p2);
      console.log(p1);
    }
  }
}
sortNumbers(2, 1, 3);
