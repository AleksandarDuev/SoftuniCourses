function housePainting(input) {
    x = Number(input[0]);
    y = Number(input[1]);
    h = Number(input[2]);
    frontWallArea = (x * x) - 2.4;
    backWallArea = x * x;
    sideWallsArea = (x * y * 2) - (1.5 * 1.5 * 2);
    roofArea = (x * y * 2) + (x * h);
    greenPaintNeeded = (frontWallArea + backWallArea + sideWallsArea) / 3.4;
    redPaintNeeded = roofArea / 4.3
    console.log(greenPaintNeeded.toFixed(2));
    console.log(redPaintNeeded.toFixed(2));
}
housePainting(["6", "10", "5.2"])