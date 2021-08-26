function mountainRun(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForOneMeter = Number(input[2]);
    totalTime = distanceInMeters * timeForOneMeter;
    delay = Math.floor(distanceInMeters / 50) * 30;
    totalTime = totalTime + delay;

    if (totalTime < recordInSeconds) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`)
    }
}
mountainRun(["5554.36", "1340", "3.23"])





