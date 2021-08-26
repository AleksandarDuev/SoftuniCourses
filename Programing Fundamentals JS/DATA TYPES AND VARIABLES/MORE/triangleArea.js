function triangleArea(x, y, z) {
  let s = (x + y + z) / 2;
  let area = Math.sqrt(s * (s - x) * (s - y) * (s - z));
  console.log(area);
}
triangleArea(2, 3.5, 4);
