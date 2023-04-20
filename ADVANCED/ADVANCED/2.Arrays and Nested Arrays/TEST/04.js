function solve(arr, rotates) {
  
  for (let i = 0; i < rotates; i++) {
    let el = arr.pop();
    arr.unshift(el);
   
  }
  console.log(arr.join(' '));
}

solve(["1", "2", "3", "4"], 2);
solve(["Banana", "Orange", "Coconut", "Apple"], 15);
