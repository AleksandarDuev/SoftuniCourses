function task(input) {
  let catalog = {
    name: "",
    likes: 0,
    comments: 0,
    sum: 0
  };
  

let count = 0;
 
while (input[0] !== "Log out") {
    let [command, name, number] = input.shift().split(": ");

    if (command === "New follower") {
      if (catalog.name !== name) {
        catalog.name= name;
        count++;
        
      }
    }
    if (command === "Like") {
      if (catalog.name === name) {
        
        catalog.likes += Number(number);
        catalog.sum+= catalog.likes;
      }else{
        catalog.name= name;
        catalog.likes = Number(number);
         catalog.sum+= catalog.likes;

      }
     }
    if (command === "Comment") {
      if (catalog.name !== name){
        catalog.name= name;
        catalog.comments = 1;
        catalog.sum+= catalog.comments
      }else{
        catalog.comments+=1;
        catalog.sum+= catalog.comments
      }
    }
    if (command === "Blocked") {
      if (catalog.name === name){
        delete catalog
      }else{
        console.log(`${name} doesn't exist`);
      }

    }
    console.log(catalog);
  } 
  // console.log(catalog.sum)
  // console.log(catalog);
  // console.log(count)
} 
task(["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"]);
