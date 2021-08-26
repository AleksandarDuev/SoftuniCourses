function building(input) {
    let floorsCount = Number(input[0]);
    let roomsPerFloor = Number(input[1]);
    for (let i = floorsCount; i > 0; i--) {
        let result = "";
        for (let z = 0; z < roomsPerFloor; z++) {
            if (i === floorsCount) {
                result += "L" + i + z + " ";
            } else if (i % 2 === 0) {
                result += "O" + i + z + " ";
            }else{
                result += "A" + i + z + " ";
            }
        }
        console.log(result);
    }
}
building((["6", "4"]))