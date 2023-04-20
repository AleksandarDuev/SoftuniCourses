function biggerHalf(array){
    let newArray = array.sort((a, b) =>a-b)
   let middle = newArray.length/2;
   let result= newArray.splice(middle)
   
   return result;
}
biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])