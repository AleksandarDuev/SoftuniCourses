function scholarship(input) {
    let incomeInLv = Number(input[0]);
    let averageGrade = Number(input[1]);
    let minSalary = Number(input[2]);
    let socialScholarship = 0;
    let gradeScholarship = 0;

    if (incomeInLv < minSalary && averageGrade > 4.5) {
        socialScholarship = Math.floor(minSalary * 0.35);
    }
    if (averageGrade >= 5.50) {
        gradeScholarship = Math.floor(averageGrade * 25);
    }

    if (socialScholarship !== 0 || gradeScholarship !== 0) {
        if (socialScholarship > gradeScholarship) {
            console.log(`You get a Social scholarship ${socialScholarship} BGN`)
        } else {
            console.log(`You get a scholarship for excellent results ${gradeScholarship} BGN`);
        }
    } else {
        console.log("You cannot get a scholarship!");
    }
}

scholarship(["300.00",
    "5.65",
    "420.00"])

