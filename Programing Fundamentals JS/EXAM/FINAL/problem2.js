function task(input){
   let n = Number(input.shift()); 
  let pattern = /(\S+)>(\d+)|([a-z]+)|([A-Z]+)|([^<|>]*)<(\S+)/;
    let match = pattern.exec(input);
    for (let i = 0; i < n; i++){
      console.log(match);
    }
        
        
      
      
  
}
task(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"]);