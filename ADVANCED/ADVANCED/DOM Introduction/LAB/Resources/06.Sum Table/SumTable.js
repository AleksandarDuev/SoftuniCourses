function sumTable() {
//select first table
    const rows = document.querySelectorAll('table tr');
let sum = 0;
    // select only rows containing numbers

// repeat for every row
  //- find last cell
  //- add cell value to sum
  for (let i = 1; i < rows.length - 1; i++) {
      sum += Number(rows[i].lastElementChild.textContent)
  }
 document.getElementById("sum").textContent = sum;
}

const  beerPrice = document.querySelector()