function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timePerMeter = Number(input[2]);
    let totalSeconds = distanceInMeters * timePerMeter;
    let delay = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = (totalSeconds + delay);
    let result = (totalTime - recordInSeconds);
    if (totalTime < recordInSeconds) {

        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
    else {
        console.log(`No, he failed! He was ${result.toFixed(2)} seconds slower.`);
    }

}
worldSwimmingRecord(["10464", "1500", "20"])