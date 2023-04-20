function circleArea(num) {
  const numType = typeof (num)
    if (numType === 'number')  {
    console.log((Math.PI * num * num).toFixed(2));
  }else{
      console.log(`We can not calculate the circle area, because we receive a ${numType}.`);
  }
}
circleArea(5);
circleArea("name");
