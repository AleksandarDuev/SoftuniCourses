// function bonusScoringSystem([
//   studentsCountStr,
//   lecturesCountStr,
//   additionalBonusStr,
//   ...input
// ]) {
//   const studentsCount = Number(studentsCountStr);
//   const lecturesCount = Number(lecturesCountStr);
//   const additionalBonus = Number(additionalBonusStr);

//   const students = input.slice(0, studentsCount).map((s) => Number(s));
//   // console.log(students)

//   const result = students.map((s) => {
//     return {
//       total: Math.ceil((s / lecturesCount) * (5 + additionalBonus)),
//       attendance: s,
//     };
//   });

//   const max =
//     studentsCount === 0
//       ? { total: 0, attendance: 0 }
//       : result.reduce((acc, curr) => (acc.total < curr.total ? curr : acc));

//   console.log(`Max Bonus: ${max.total}.`);
//   console.log(`The student has attended ${max.attendance} lectures.`);
// }
function bonusScoringSystem(input) {
  let studs = Number(input.shift());
  let lections = Number(input.shift());
  let bonus = Number(input.shift());
  let totalBonus = 0;
  let studAttendances = 0;
  let maxAttendances =0;
  let maxBonus = 0;

  for (let i = 0; i < studs; i++) {
    studAttendances = Number(input[i]);

    if (studAttendances >= maxAttendances) {
      maxAttendances = studAttendances;
    }
    totalBonus = Math.ceil((studAttendances / lections) * (5 + bonus));
    if (totalBonus >= maxBonus) {
      maxBonus = totalBonus;
    }
  }

  console.log(`Max Bonus: ${maxBonus}.`);
  console.log(`The student has attended ${maxAttendances} lectures.`);
}

bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
//bonusScoringSystem([11, 30, 14, 8, 23, 27, 28, 15, 17, 25, 26, 5, 18]);
