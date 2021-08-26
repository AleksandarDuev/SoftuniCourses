function printCertificate(eval, names1) {
  if (pass(eval)) {
    printHeaders();
    printnames(names1);
    printgrades(eval);
  } else {
    console.log(`${names1[0]} ${names1[1]} does not qualify`);
  }
  function printHeaders() {
    console.log("~~~-  {@}  -~~~");
    console.log("~- Certificate -~");
    console.log("~~~- ~---~ -~~~");
  }
  function names(arrName) {
    console.log(arrName[0] + " " + arrName[1]);
  }
  function pass(grades){
    return grades >= 3;
    }
  function grades(eval) {
    if (grade < 3.0) {
      console.log("Fail (2)");
    } else if (grade < 3.5) {
      console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.5) {
      console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.5) {
      console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.5) {
      console.log(`Excellent (${grade.toFixed(2)})`);
    }
  }
}
printCertificate(6, ["Peter", "Carter"]);
