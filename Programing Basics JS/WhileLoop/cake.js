function cake(input) {
    let cakeLength = Number(input[0]);
    let cakeWidth = Number(input[1]);
    let piecesTaken = 0;
    piecesCount = cakeLength * cakeWidth;
    let command = input[2];
    let index = 3;
    while (command !== "STOP") {
        piecesTaken += Number(command);
        if (piecesTaken > piecesCount) {
            break;
        }
        command = input[index++];
    }
    if (piecesTaken > piecesCount) {
        console.log(`No more cake left! You need ${piecesTaken - piecesCount} pieces more.`);
    } else {
        console.log(`${piecesCount - piecesTaken} pieces are left. `);
    }
}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);

