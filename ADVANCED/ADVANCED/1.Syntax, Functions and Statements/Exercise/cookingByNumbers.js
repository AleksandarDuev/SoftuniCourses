function cookingByNumbers(arg1, arg2, arg3, arg4, arg5, arg6) {
  let n = Number(arg1);
  let arr = [arg2, arg3, arg4, arg5, arg6];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "chop") {
      n = n / 2;
      console.log(n);
    }

    if (arr[i] === "dice") {
      n = Math.sqrt(n);
      console.log(n);
    }
     
    if (arr[i] === "spice") {
      n += 1;
      console.log(n);
    }
    if (arr[i] === "bake") {
      n *=3 ;
      console.log(n);
    }
    if (arr[i] === "fillet"){
      n -= (n*0.2); 
      console.log(n);
    }
  }
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice","spice", "chop", "bake", "fillet");
