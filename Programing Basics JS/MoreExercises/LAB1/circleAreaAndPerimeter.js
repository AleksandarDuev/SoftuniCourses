function circleAreaAndPerimeter(input) {
    r = Number(input[0]);
    area = Math.PI * r * r;
    perimeter = 2 * Math.PI * r;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
circleAreaAndPerimeter(["3"])