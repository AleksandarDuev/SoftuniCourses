function sortAnArrayBy2Criteria(array) {
  array.sort((a, b) => {
    let mainCriteria = a.length - b.length;
    let secondCriteria = a.localeCompare(b);
    return mainCriteria || secondCriteria;
  });
  console.log(array.join("\n"));
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
