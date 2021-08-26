function fishTank(input) {
    let lengthInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let heightInCm = Number(input[2]);
    let percent = Number(input[3]);
    tankVolume = lengthInCm * widthInCm * heightInCm;
    tankVolumeInLt = tankVolume * 0.001;
    realPercent = percent * 0.01;
    waterVolume = tankVolumeInLt * (1 - realPercent);
    console.log(waterVolume.toFixed(5));
}
fishTank(["85", "75", "47", "17"]);
