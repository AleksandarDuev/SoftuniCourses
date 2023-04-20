function deleteByEmail() {
  //   let input = document.querySelector('input[name="email"]');
  //   let rows = Array.from(document.querySelector("tbody").children);
  //   let isRemoved = false;
  //   for (let row of rows) {
  //     if (row.children[1].textContent == input.value) {
  //       row.remove();
  //       isRemoved = true;
  //     }
  //   }
  //   if (isRemoved) {
  //       document.getElementById('result').textContent = 'Deleted.'
  //   }else{
  //       document.getElementById('result').textContent = 'Not found.'
  //   }

  let input = document.querySelector('input[name="email"]');
  let rows = Array.from(document.querySelector("tbody").children).filter(
    (row) => row.children[1].textContent == input.value
  );
  rows.forEach((row) => row.remove());

  document.getElementById("result").textContent =
    rows.length > 0 ? "Deleted." : "Not found.";
}
