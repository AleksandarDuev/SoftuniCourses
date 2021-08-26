function traveling(input) {
    let index = 0;
    let destinations = input[index++];
    let budget = 0;
    let savings = 0;
    while (destinations !== "End") {
        budget = Number(input[index++]);
        savings = 0;
        while (savings < budget) {
            savings += Number(input[index++]);
        }
        console.log(`Going to ${destinations}!`);
        destinations = input[index++];
    }
}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);
