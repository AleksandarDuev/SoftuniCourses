function addAndRemoveElements(arr) {
  let newArr = [];
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num++;
    if (arr[i] === "add") {
      newArr.push(num);
    } else if (arr[i] === "remove") {
      newArr.pop(i);
    }
  }
  if (newArr.length <= 0) {
    console.log("Empty");
  }
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
  }
}
addAndRemoveElements(["add", "add", "add", "add"]);
console.log('----------');
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
console.log('----------');
addAndRemoveElements(["remove", "remove", "remove"]);
