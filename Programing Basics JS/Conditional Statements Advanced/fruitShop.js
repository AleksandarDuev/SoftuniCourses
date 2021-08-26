function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = input[2];
    if (fruit === "banana") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": console.log((quantity * 2.5).toFixed(2)); break;
            case "Saturday":
            case "Sunday": console.log((quantity * 2.7).toFixed(2)); break;
            default: console.log("error");
        }
    }
    else if (fruit === "apple") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": console.log((quantity * 1.2).toFixed(2)); break;
            case "Saturday":
            case "Sunday": console.log((quantity * 1.25).toFixed(2)); break;
            default: console.log("error");
        }
    }
    else if (fruit === "orange") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": console.log((quantity * 0.85).toFixed(2)); break;
            case "Saturday":
            case "Sunday": console.log((quantity * 0.90).toFixed(2)); break;
            default: console.log("error");
        }
    }
    else if (fruit === "grapefruit") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": console.log((quantity * 1.45).toFixed(2)); break;
            case "Saturday":
            case "Sunday": console.log((quantity * 1.60).toFixed(2)); break;
            default: console.log("error");
        }
    }
    else if (fruit === "kiwi") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": console.log((quantity * 2.70).toFixed(2)); break;
            case "Saturday":
            case "Sunday": console.log((quantity * 3.00).toFixed(2)); break;
            default: console.log("error");
        }
    }
    else if (fruit === "pineapple") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": console.log((quantity * 5.50).toFixed(2)); break;
            case "Saturday":
            case "Sunday": console.log((quantity * 5.60).toFixed(2)); break;
            default: console.log("error");
        }
    }
    else if (fruit === "grapes") {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": console.log((quantity * 3.85).toFixed(2)); break;
            case "Saturday":
            case "Sunday": console.log((quantity * 4.20).toFixed(2)); break;
            default: console.log("error");
        }
    }
    else {
        console.log("error");
    }
}
fruitShop(["tomato",
    "Monday",
    "0.5"])