function pyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentline = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let columns = 1; columns <= rows; columns++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentline += current + " ";
            current++;
        }
        console.log(printCurrentline);
        printCurrentline = "";
        if (isBigger) {
            break;
        }
    }
}
pyramid(["7"])