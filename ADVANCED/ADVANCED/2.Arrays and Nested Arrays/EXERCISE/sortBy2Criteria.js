function sortBy2Criteria(array) {
  const sorted = array.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  for(let i = 0; i < sorted.length; i++) {
      console.log(sorted[i]);
  }
}
sortBy2Criteria(["alpha", "beta", "gamma"]);
sortBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
