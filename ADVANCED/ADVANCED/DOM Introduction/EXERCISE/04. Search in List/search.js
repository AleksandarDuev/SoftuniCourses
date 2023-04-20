function search() {
  let towns = Array.from(document.querySelectorAll("ul li"));
  let text = document.getElementById("searchText").value;
  let matches = 0;
  towns.forEach((town) => {
    if (town.textContent.includes(text)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
    }else{
       town.style.fontWeight = "normal";
       town.style.textDecoration = "";
    }
  });
  document.getElementById("result").textContent = `${matches} matches found`
}
