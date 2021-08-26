function fishLand(input) {
    let mackerelPrice = (input[0]);
    let spratPrice = (input[1]);
    let bonitoKg = (input[2]);
    let scadKg = (input[3]);
    let shellKg = (input[4]);
    shellPrice = 7.5;
    bonitoPrice = (mackerelPrice * 1.6);
    scadPrice = (spratPrice * 1.8);
    bonitoTotal = bonitoKg * bonitoPrice;
    scadTotal = scadKg * scadPrice;
    shellTotal = shellKg * shellPrice;
    check = bonitoTotal + scadTotal + shellTotal;
    console.log(check.toFixed(2));
}
fishLand(["6.9", "4.2", "1.5", "2.5", "1"])