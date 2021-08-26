function pipesInPool(input) {
    let volume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);
    p1Work = p1 * h;
    p2Work = p2 * h;
    totalWork = p1Work + p2Work;
    percentOfVolume = (totalWork / volume) * 100;
    p1Percent = ((p1Work / totalWork) * 100).toFixed(2);
    p2Percent = ((p2Work / totalWork) * 100).toFixed(2);
    if (percentOfVolume <= volume) {
        console.log(`The pool is ${percentOfVolume}% full. 
Pipe 1: ${p1Percent}%. Pipe 2: ${p2Percent}%.`);
    }
    else if (totalWork > volume) {

        console.log(`For 2.50 hours the pool overflows with ${totalWork - volume} liters.`);
    }
}
pipesInPool(["100", "100", "100", "2.5"])