function search() {
  let towns = document.querySelectorAll("ul li");
  let input = document.getElementById('searchText').value;
  let result = document.getElementById('result');
  let matches = 0;
  for(let town of towns ){
     
     if(town.textContent.includes(input)){
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
     }else{
      town.style.fontWeight = "normal";
      town.style.textDecoration = "";
     }
  }
  result.textContent = `${matches} matches found`
}
