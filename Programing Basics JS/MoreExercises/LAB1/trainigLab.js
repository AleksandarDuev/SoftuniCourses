function trainigLab(input) {
    let labLenght = Number(input[0]);
    let labWidth = Number(input[1]);
    let deskWidth = 0.7;
    let deskLenght = 1.2;
    avalibleWidth = labWidth - 1;
    deskCountWidth = Math.floor(avalibleWidth / deskWidth);
    desKCountLenght = Math.floor(labLenght / deskLenght);
    placesCount = (deskCountWidth * desKCountLenght) - 3;
    console.log(placesCount);

}
trainigLab(["8.4", "5.2"])