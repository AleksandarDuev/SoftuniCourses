function triangleArea(input){
    let a = Number(input[0]);
    let h = Number(input[1]);
    Area = a * h / 2;
    console.log(Area.toFixed(2));
}
triangleArea([20, 30])