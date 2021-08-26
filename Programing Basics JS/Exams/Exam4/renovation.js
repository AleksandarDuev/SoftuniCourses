function renovation(input) {
    let index = 0;
    let h = Number(input[index]);
    index++
    let w = Number(input[index]);
    index++
    let wallsCount = 4;
    let percent = Number(input[index]) / 100;
    index++

    let command = input[index];
    index++;

    let totalArea = h * w * wallsCount;
    totalArea = Math.ceil(totalArea - (totalArea * percent));
    let areaCovered = 0;
    while (command !== "Tired!") {
        let paint = Number(command);
        areaCovered += paint;
        if (areaCovered >= totalArea) {
            break;
        }


        command = input[index];
        index++
    }

    if (command === "Tired!") {
        console.log(`${Math.abs(totalArea - areaCovered)} quadratic m left.`);
    }
     if (areaCovered > totalArea) {
        console.log(`All walls are painted and you have ${Math.abs(areaCovered - totalArea)} l paint left!`)

    }
     if (areaCovered === totalArea) {
        console.log("All walls are painted! Great job, Pesho")
    }

}
renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])



