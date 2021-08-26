function salary(input) {
    let tabsCount = Number(input[0]);
    let payment = Number(input[1]);

    for (let i = 2; i <= input.length - 1; i++) {
        let tab = input[i];
        if (tab === "Facebook") {
            payment -= 150;
        } else if (tab === "Instagram") {
            payment -= 100;
        } else if (tab === "Reddit") {
            payment -= 50;
        }
    }
    if (payment <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(payment);
    }

}
salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"]
)

