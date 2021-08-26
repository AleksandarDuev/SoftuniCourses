function trekkingMania(input) {
    let groups = Number(input[0]);
    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    for (i = 1; i <= groups; i++) {
        let allPeoples = Number(input[i]);
        if (allPeoples <= 5) {
            musala += allPeoples;
        } else if (allPeoples > 5 && allPeoples <= 12) {
            montblanc += allPeoples;
        } else if (allPeoples > 12 && allPeoples <= 25) {
            kilimanjaro += allPeoples;
        } else if (allPeoples > 25 && allPeoples <= 40) {
            k2 += allPeoples;
        } else if (allPeoples > 40) {
            everest += allPeoples;
        }
    }
    let sumPeoples = musala + montblanc + kilimanjaro + k2 + everest;
    console.log(`${((musala / sumPeoples) * 100).toFixed(2)}%`);
    console.log(`${((montblanc / sumPeoples) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / sumPeoples) * 100).toFixed(2)}%`);
    console.log(`${((k2 / sumPeoples) * 100).toFixed(2)}%`);
    console.log(`${((everest / sumPeoples) * 100).toFixed(2)}%`);
}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);

