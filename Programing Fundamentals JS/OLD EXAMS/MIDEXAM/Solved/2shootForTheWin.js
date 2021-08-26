function shootForTheWin(array) {
 
    let counter = 0;
    let targets = array.shift().split(' ').map(Number);
    
    for (let index of array) {
 
        if (index != 'End' && Number(index) < targets.length) {
 
            if (targets[Number(index)] !== -1) {
                let value = targets.splice(Number(index), 1, -1).join('');
                counter++;
                
                for (let i = 0; i < targets.length; i++) {
                    if (targets[i] > Number(value) && targets[i] !== -1) {
                        targets[i] -= Number(value); 
                    } else if (targets[i] <= Number(value) && targets[i] !== -1) {
                        targets[i] += Number(value); 
                    }
 
                }
            }
        } else if (index == 'End') {
            console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
        }
    }
}
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
