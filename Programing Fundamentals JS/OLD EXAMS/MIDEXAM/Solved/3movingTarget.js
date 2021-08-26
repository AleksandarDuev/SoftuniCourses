function movingTarget(input) {
    let targets = input.shift().split(' ').map(Number)
    for (let action of input) {
        if (action == 'End') {
            break;
        }
        let current = action.split(' ');
        let index = Number(current[1])
        if (current[0] == 'Shoot') {
            if (index < targets.length && index>=0) {
                targets[index] -= Number(current[2]);
                if (targets[index] <= 0) {
                    targets = targets.filter(x => x != targets[index]);
                }
            }
        } else if (current[0] == 'Add') {
            if (index < targets.length && index>=0) {
                targets.splice(index, 0, Number(current[2]));
            } else {
                console.log(`Invalid placement!`);
            }
        } else if (current[0] == 'Strike') {
            if (index < targets.length) {
                let radius = Number(current[2]);
                if (index - radius >= 0 && index + radius < targets.length){
                    targets.splice((index - radius),(1 + (radius * 2)));
                } else {
                    console.log(`Strike missed!`);
                }
            }
        }
    }
 
    console.log(targets.join('|'))
}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
