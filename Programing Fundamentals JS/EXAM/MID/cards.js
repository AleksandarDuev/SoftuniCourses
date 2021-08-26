function cards(input) {
  const [list, ...commands] = input;
  const deck = list.split(":");
  const result = commands.reduce((acc, curr) => {
    const [comm, name, name2] = curr.split(" ");
    if (comm === "Ready") {
      return acc;
    }
    if (comm === "Add") {
        const index = deck.indexOf(name)
        if(index === -1){
            console.log("Card not found.")
            return acc;
        }

        return [...acc, name]
    }

    if (comm === "Insert") {
        const insertIndex = Number(name2)
        const index = deck.indexOf(name)
        if (index === -1 || (acc.length >= insertIndex && insertIndex < 0)){
            console.log("Error!");
            return acc;
        }
        return [...acc.slice(0,insertIndex), name, ...acc.slice(insertIndex)]
    }
    if (comm === "Remove") {
        const index = acc.indexOf(name)
        if(index === -1){
            console.log("Card not found.")
            return acc;
        }

        return [...acc.slice(0, index), ...acc.slice(index + 1)];
    }
    if (comm === "Swap") {
        const index = acc.indexOf(name)
        const index2 = acc.indexOf(name2)

        const first = acc[index]
        const second = acc[index2]

        acc[index] = second
        acc[index2] = first
        
        return acc
    }
    if (comm === "Shuffle") {
     
      const rev = acc.reverse();
      return rev
    }
  }, []);
  
  console.log(result.join(' '));
}

cards([
  "Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
  "Add Moonfire",
  "Add Pounce",
  "Add Bite",
  "Add Wrath",
  "Insert Claw 0",
  "Swap Claw Moonfire",
  "Remove Bite",
  "Shuffle deck",
  "Ready",
]);
