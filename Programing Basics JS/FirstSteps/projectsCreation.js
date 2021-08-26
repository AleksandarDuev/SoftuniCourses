function projectsCreation(input) {
    let architectName = input[0];
    let projectsCount = Number(input[1]);
    let totalHours = projectsCount * 3;
    console.log(`The architect ${architectName} will need ${totalHours} hours to complete ${projectsCount} project/s.`);
}
projectsCreation(["Sanya", "9"])

