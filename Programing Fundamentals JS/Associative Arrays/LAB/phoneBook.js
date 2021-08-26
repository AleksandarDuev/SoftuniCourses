function phoneBook(input) {
  let phoneList = {};
  for (let line of input) {
    let [name, phone] = line.split(" ");
    phoneList[name] = phone;
  }
  for (let key in phoneList) {
    console.log(`${key} -> ${phoneList[key]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
