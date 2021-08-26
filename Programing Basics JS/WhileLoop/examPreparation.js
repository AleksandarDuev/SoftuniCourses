function examPreparation(input) {
  let index = 0;
  badGradesScore = Number(input[index]);
  index++;
  let taskName = input[index];
  let goodGradesCount = 0;
  let badGradesCount = 0;
  let gradesSum = 0;
  let lastTask = "";
  while (badGradesCount < badGradesScore) {
    let currentTaskName = taskName;
    index++;
    let grade = Number(input[index]);
    console.log(currentTaskName);
    console.log(grade);
    index++;
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
