function schoolGrades(input) {
  let grades = {};
  for (line of input) {
    let [name, ...grade] = line.split(" ");
    if (grades.hasOwnProperty(name)) {
      const [avarage, ...arr] = grades[name];
      const arrToAdd = [...arr, ...grade];
      const avarageValue =
        arrToAdd.reduce((acc, v) => {
          return Number(v) + acc;
        }, 0) / arrToAdd.length;
      grades[name] = [avarageValue, ...arrToAdd];
    } else {
      const avarageValue =
        grade.reduce((acc, value) => {
          return Number(value) + acc;
        }, 0) / grade.length;

      grades[name] = [avarageValue, ...grade];
    }
  }
 

  Object.values(grades)
    .sort((a, b) => a[0] - b[0])
    .map((i) => {
      const [avarage, ...arr] = i;
      for (line in grades) {
        if (grades[line] === i) console.log(`${line}: ${arr.join(", ")}`);
      }
    });
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
