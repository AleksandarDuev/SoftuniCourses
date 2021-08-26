function task(input) {
  let heroes = {};

  while (input[0] !== "End") {
    let [command, ...rest] = input.shift().split(" ");

    if (command === "Enroll") {
      let name = rest[0];
     
      if (heroes.hasOwnProperty(name)) {
        console.log(`${name} is already enrolled.`);
      } else {
        heroes[name] = [];
        
        
      }
    }
    if (command === "Learn") {
      let name = rest[0]
      if(heroes.hasOwnProperty(name)){
        if(heroes[name].includes(rest[1])){
          console.log(`${name} has already learnt ${rest[1]}.`);
        }else(
          heroes[name] = [...heroes[name], rest[1]]
        )
      }else{
        console.log(`${name} doesn't exist.`);
      }
    }
    if (command === "Unlearn") {
      let name = rest[0];
      if(heroes.hasOwnProperty(name)){
        if(heroes[name].includes(rest[1])){
          heroes[name] = heroes[name].filter((spell)=> spell !== rest[1] )
        }else{
          console.log(`${name} doesn't know ${rest[1]}.`);
        }
      }else{
        console.log(`${name} doesn't exist.`);
      }
    }
    
  }
  

  let sorted = Object.entries(heroes).sort((a, b) => {
    let countSpellA = a[1].length;
    let countSpellB = b[1].length;
    let nameA = a[0];
    let nameB = b[0];
    return countSpellB - countSpellA || nameA.localeCompare(nameB);
  });
  console.log('Heroes:');
  for (let [name, spells] of sorted) {
    console.log(`== ${name}: ${spells.join(', ')}`);
  }
}

task(["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Enroll Atanas",
"Enroll Zoro",
"Unlearn Zoro Dispel",

// "Learn Stefan Spell",
"Learn Zoro Dispel",
"End"])

