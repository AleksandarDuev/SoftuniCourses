function suitcasesLoad(input) {
    let loadCapacity = Number(input[0]);
    let index = 1;
    let command = input[index];;
    let casesCount = 0;

    while (command !== "end") {
        let caseVolume = Number(command);
        if (index % 3 === 0) {
            caseVolume *= 1.1;
        }
        if(caseVolume > loadCapacity){
            break;
        }
        casesCount++;
        
        loadCapacity -= caseVolume;
       
        
        index++
        command = input[index];
    }
    if (command === "end") {
        console.log("Congratulations! All suitcases are loaded");
    } else {
        console.log("No more space!");
    }
    console.log(`Statistic: ${casesCount} suitcases loaded.`)


}
suitcasesLoad(["700.5", "180", "340.6", "126"]);

