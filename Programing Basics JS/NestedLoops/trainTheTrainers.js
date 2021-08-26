function trainTheTrainers(input) {
    let numOfPpl = Number(input[0]);
    let index = 1;
    let allScore = 0;
    let counter = 0;

    while (true) {
        let nameOfPresentation = input[index++];
        let sumOfGrades = 0;
        if (nameOfPresentation == "Finish") {
            let score = allScore / counter;
            console.log(`Student's final assessment is ${score.toFixed(2)}.`);
            break;
        }
        for (let i = 0; i < numOfPpl; i++) {
            let grades = Number(input[index++]);
            sumOfGrades += grades;
            allScore += grades;
            counter++;
        }
        let total = sumOfGrades / numOfPpl;
        console.log(`${nameOfPresentation} - ${total.toFixed(2)}.`);
    }
}