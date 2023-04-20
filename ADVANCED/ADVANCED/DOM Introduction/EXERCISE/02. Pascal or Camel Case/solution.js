function solve() {
  let input = document.getElementById("text").value;
  let naming = document.getElementById("naming-convention").value;
  let splited = input.split(" ");
  let result = document.getElementById("result");
  let resultString = "";
  if (naming === "Pascal Case") {
    for (let i = 0; i < splited.length; i++) {
      resultString +=
        splited[i][0].toUpperCase() +
        splited[i].slice(1, splited[i].length).toLowerCase();
    }
  } else if (naming === "Camel Case") {
    resultString +=
      splited[0][0].toLowerCase() +
      splited[0].slice(1, splited[0].length).toLowerCase();
    for (let i = 1; i < splited.length; i++) {
      resultString +=
        splited[i][0].toUpperCase() +
        splited[i].slice(1, splited[i].length).toLowerCase();
    }
  } else {
    result.textContent = "Error!";
    return;
  }
  result.textContent = resultString;
}
