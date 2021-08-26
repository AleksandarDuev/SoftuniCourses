function goldMine(input) {
    let index = 0;
    let locationCount = Number(input[index]);
    index++
    for (let i = 0; i < locationCount; i++) {
        let avgExtraction = Number(input[index]);
        index++
        let days = Number(input[index]);
        index++;
        let sumExtraction = 0;
        for (let j = 0; j < days; j++) {
            let extraction = Number(input[index]);
            index++;
            sumExtraction += extraction;
        }
        let avg = sumExtraction / days;
        if (avg >= avgExtraction) {
            console.log(`Good job! Average gold per day: ${avg.toFixed(2)}.`);
            
        } else {
            console.log(`You need ${(avgExtraction - avg).toFixed(2)} gold.`);
        }

    }
  
}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])
