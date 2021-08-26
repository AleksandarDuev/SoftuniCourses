function oddOccurrences(input) {
  let elementsList = input.split(" ");
  let occurrences = {};
  for (let element of elementsList) {
    element = element.toLowerCase();
    if (!Object.keys(occurrences).includes(element)) {
        occurrences[element] = 0;
    }
    occurrences[element] += 1;
  }
  let result = [];
  for(let [key, value] of Object.entries(occurrences)) {
      if(value % 2 !== 0) {
          result.push(key);
      }
      
  }
  console.log(result.join(' '));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
 