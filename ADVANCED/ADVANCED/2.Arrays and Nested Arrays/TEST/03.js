function solve(arr) {
  let init = 0;
  let result = [];
  arr.map((el, i) => {
    init++;
    if (el === "add") {
      result.push(init);
    } else if (el === "remove") {
      result.pop(el[i]);
    }
  });
  if (result.length < 1) {
    console.log("Empty");
  }
  console.log(result.join("\n"));
}

solve(["add", "add", "add", "add"]);
console.log("------");
solve(["add", "add", "remove", "add", "add"]);
console.log("------");
solve(["remove", "remove", "remove"]);
