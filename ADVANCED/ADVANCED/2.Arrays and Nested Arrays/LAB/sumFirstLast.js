function sumFirstLast(arr){
    // let first = Number(arr[0]);
    // let last = Number(arr[arr.length - 1]);          
    // console.log(first +last)
    const first = Number(arr.shift()); 
    const last = Number(arr.pop());            //alternative     
    return first +last;                        // mutate array  
}
sumFirstLast(['20', '30', '40']);