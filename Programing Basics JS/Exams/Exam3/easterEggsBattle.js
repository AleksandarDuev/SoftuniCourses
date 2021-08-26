function easterEggsBattle(input) {
    let eggsP1 = Number(input[0]);
    let eggsP2 = Number(input[1]);
    let p1Points = 0;
    let p2Points = 0;
    let index = 2;
    let command = input[index];
    index++
    while (command !== "End of battle") {
        let player = command;
       if(player === "one"){
           eggsP2 --;
           p1Points++;
           if(eggsP2 === 0){
               console.log(`Player two is out of eggs. Player one has ${eggsP1} eggs left.`)
               return;
           }
       }else if(player === "two"){
           eggsP1--;
           p2Points++;
           if(eggsP1 === 0){
            console.log(`Player one is out of eggs. Player two has ${eggsP2} eggs left.`)
            return;

       }
           
       }

        command = input[index];
        index++;
    }
    console.log(`Player one has ${eggsP1} eggs left.`);
    console.log(`Player two has ${eggsP2} eggs left.`);
}

easterEggsBattle(["2",
"6",
"one",
"two",
"two"])
