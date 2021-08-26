function skiTrip(input) {
    let restDays = Number(input[0]);
    let roomType = input[1];
    let evaluation = input[2];
    let overnight = restDays - 1;
    let total = 0;
    if (restDays < 10) {
        switch (roomType) {
            case "room for one person": total = overnight * 18; break;
            case "apartment": total = (overnight * 25) * 0.70; break;
            case "president apartment": total = (overnight * 35) * 0.9; break;
        }
    } else if (restDays >= 10 && restDays <= 15) {
        switch (roomType) {
            case "room for one person": total = overnight * 18; break;
            case "apartment": total = (overnight * 25) * 0.65; break;
            case "president apartment": total = (overnight * 35) * 0.85; break;
        }
    } else {
        switch (roomType) {
            case "room for one person": total = overnight * 18; break;
            case "apartment": total = (overnight * 25) * 0.5; break;
            case "president apartment": total = (overnight * 35) * 0.8; break;
        }
    }
    if (evaluation === "positive") {
        total = total * 1.25;
    }
    else {
        total = total * 0.9;
    }
    console.log(total.toFixed(2));
}
skiTrip(["14", "apartment", "positive"])
