function tourAgency(input) {
    let townName = input[0];
    let packageType = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let dayPrice = 0;
    if (townName === "Bansko" || townName === "Borovets") {

        if (packageType === "noEquipment" && vip === "no") {
            dayPrice = 80;
        } else if (packageType === "noEquipment" && vip === "yes") {
            dayPrice = 80 * 0.95;

        } else if (packageType === "withEquipment" && vip === "no") {
            dayPrice = 100;
        } else if (packageType === "withEquipment" && vip === "yes") {
            dayPrice = 100 * 0.90;
        }
    }
    if (townName === "Varna" || townName === "Burgas") {

        if (packageType === "noBreakfast" && vip === "no") {
            dayPrice = 100;
        } else if (packageType === "noBrekfast" && vip === "yes") {
            dayPrice = 100 * 0.93;
        } else if (packageType === "withBreakfast" && vip === "no") {
            dayPrice = 130;
        } else if (packageType === "withBreakfast" && vip === "yes") {
            dayPrice = 130 * 0.88;
        }
    }

    if (days < 1) {
        console.log("Days must be positive number!");
        return;
    }
    if ((townName !== "Bansko" && townName !== "Borovets" && townName !== "Varna" && townName !== "Burgas") || (packageType !== "withEquipment" && packageType !== "noEquipment" && packageType !== "withBreakfast" && packageType !== "noBreakfast")) {
        console.log("Invalid input!");
        return;
    }
    if (days > 7) {
        days = days - 1;
    }

    console.log(`The price is ${(dayPrice * days).toFixed(2)}lv! Have a nice time!`);


}
tourAgency(["Borovets",
    "noEquipment",
    "yes",
    "6"])




