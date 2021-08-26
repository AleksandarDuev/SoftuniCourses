function task(input) {
  const [actKey, ...commands] = input;
  
  const result = commands.reduce((acc, curr) => {
    const [comm, ...rest] = curr.split(" ");

    if (comm === "End") {

      return acc;
    }

    if (comm === "Translate") {
acc = acc.split(rest[0]).join(rest[1]);
      console.log(acc);
return acc;
    }

    if (comm === "Includes") {
      if(acc.includes(rest[0])) {
        console.log("True");
      }
      else{
        console.log("False");
      }
      return acc;
    }
    if (comm === "Start") {
      acc = acc.split(' ')
      if(acc[0] === rest[0]) {
        console.log("True")
      }else{
        console.log("False")
      }
      
      return acc;
    }
    if (comm === "Lowercase") {
       let newArr = acc.map((item) => {
        return item.toLowerCase();
        });
      console.log(newArr.join(" "));
        acc= newArr.join(" ")  ;
      return acc;
      
    }
    if (comm === "FindIndex") {
     
     index = acc.lastIndexOf(rest[0]);
     console.log(index);
     return acc;
      
    }
    if (comm === "Remove") {
     
      let start = Number(rest[0]);
      let end = Number(rest[1])
      let cut = acc.substring(start, start + end)
      acc = acc.replace(cut,"")
      
      console.log(acc);
      return acc;
    }

    return acc;
  }, actKey);
  
 }

task(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex P",
"Remove 2 7",
"End"]

);
