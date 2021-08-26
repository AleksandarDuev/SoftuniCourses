function distanceBetweenPoints(x1, y1, x2, y2) {
  let xDiff = x1 - x2;
  let yDiff = y1 - y2;
  console.log(Math.sqrt(xDiff * xDiff + yDiff * yDiff));
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);
