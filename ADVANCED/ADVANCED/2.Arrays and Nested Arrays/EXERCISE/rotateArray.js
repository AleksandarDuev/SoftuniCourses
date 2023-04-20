function rotateArray(array, num) {
  // for (let i = 0; i < num; i++) {
  //   let index = array.pop();
  //   array.unshift(index);                        //for loop
  // }
  // console.log(array.join(" "));
  const newArray = [array[0]]
  const result = newArray.reduce((acc,curr) => {
    if(curr>= acc){
newArray.push(curr);


}
return newArray;
  })
  console.log(newArray);
}
rotateArray(["1", "2", "3", "4"], 2);
