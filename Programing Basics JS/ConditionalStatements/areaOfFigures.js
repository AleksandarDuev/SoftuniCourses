function areaOfFigures(input) {
    let figureType = String(input[0]);
    let a = Number(input[1]);
    let b = Number(input[2]);
    if (figureType === "square") {
        area = a * a;
        console.log(area.toFixed(3));
    }
    else if (figureType === "rectangle") {
        area = a * b;
        console.log(area.toFixed(3));
    }
    else if (figureType === "circle") {
        area = Math.PI * (a * a);
        console.log(area.toFixed(3));
    }
    else {
        area = (a * b) / 2;
        console.log(area.toFixed(3));
    }
}
areaOfFigures(["square", "5"])