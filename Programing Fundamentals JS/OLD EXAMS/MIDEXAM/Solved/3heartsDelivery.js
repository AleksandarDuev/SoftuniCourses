function heartsDelivery(array) {
    let neighborhood = array.shift().split('@').map(Number);
    let counter = 0;
    let lastPosition = 0;
 
    for (let i = 0; i < array.length - 1; i++) {
        let jump = array[i].split(' ');
        let jumpLength = Number(jump[1]);
        counter += jumpLength;
 
        if (counter >= neighborhood.length) {
 
            counter = 0;
        }
        for (let j = 0; j < neighborhood.length; j++) {
 
            let neighbor = Number(neighborhood[j]);
            if (j === counter) {
                if (neighbor === 0) {
                    console.log(`Place ${j} already had Valentine's day.`)
                    break;
                }
 
                neighborhood.splice(j, 1, neighbor - 2);
                if (neighborhood[j] === 0) {
                    console.log(`Place ${j} has Valentine's day.`);
                    break;
                }
                
            }
        }
 
 
    }
    console.log(`Cupid's last position was ${counter}.`)
    let missed = neighborhood.filter(x => x > 0).length;
    if (missed == 0) {
        console.log('Mission was successful.')
    } else {
        console.log(`Cupid has failed ${missed} places.`)
    }
 
}
heartsDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love! "])
