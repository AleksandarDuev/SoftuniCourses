function metricConverter(input) {
    let number = Number(input[0]);
    let inputMeasure = input[1];
    let outputMeasure = input[2];
    if (inputMeasure === "mm") {
        number = number / 1000;
    }
    else if (inputMeasure === "cm") {
        number = number / 100;
    }
    else {
        number = number;
    }
    if (outputMeasure === "m") {
        console.log(number.toFixed(3));
    }
    else if (outputMeasure === "cm") {
        console.log((number * 100).toFixed(3));
    }
    else if (outputMeasure === "mm") {
        console.log((number * 1000).toFixed(3));
    }

}
metricConverter(["12", "mm", "m"])