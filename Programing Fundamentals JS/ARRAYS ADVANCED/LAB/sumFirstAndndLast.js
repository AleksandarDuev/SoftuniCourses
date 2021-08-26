function sumFirstAndndLast(input) {
  let n1 = Number(input.shift());
  let n2 = Number(input.pop());
  return n1 + n2;
}

sumFirstAndndLast(["20", "30", "40"]);
