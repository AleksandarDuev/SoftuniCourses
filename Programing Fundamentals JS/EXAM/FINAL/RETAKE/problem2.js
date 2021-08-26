function task(input) {
  let n = Number(input.shift());
  let pattern = /^([|[A-Z]{6,}|])(:)(#[A-Za-z]+ [A-Za-z]+#)$/;

  for (let i = 0; i < n; i++) {
     
    let match = pattern.exec(input[i]);
    if(match !==null) {
        let needed = match[0].split(":");
        let name = needed[0];
       
        let newName = name.substring(1, name.length-1)
        let title = needed[1];
        let newTitle = title.substring(1, title.length -1)
        console.log(`${newName}, The ${newTitle}`);
        console.log(`>> Strength: ${newName.length}`);
        console.log(`>> Armour: ${newTitle.length}`);
        
        
        match = pattern.exec(input);
    } else {
        console.log('Access denied!');
    }

    }

}

task([
  "3",
  "|GEORGI|:#Lead architect#",
  "|Hristo|:#High Overseer#",
  "|STEFAN|:#Assistant Game Developer#",
]);
