function companyUsers(input) {
  let companies = {};
  for (let element of input) {
    let [company, employee] = element.split(" -> ");
    if (!Object.keys(companies).includes(company)) {
      companies[company] = [];
    }
    companies[company].push(employee);
  }
  let sorted = Object.entries(companies);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));
  for (let element of sorted) {
    console.log(element[0]);
    let set = new Set(element[1]);
    for (let number of set) {
      console.log(`-- ${number}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
