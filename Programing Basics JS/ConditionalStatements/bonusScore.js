function bonusScore(input) {
    let initalScore = Number(input[0]);
    let bonus = 0.0;
    if (initalScore <= 100) {
        bonus = 5;
    }
    else if (initalScore > 1000) {
        bonus = (initalScore * 10) / 100;
    }
    else {
        bonus = (initalScore * 20) / 100;
    }
    if (initalScore % 2 === 0) {
        bonus += 1;

    }
    else if (initalScore % 10 === 5) {
        bonus += 2;

    }
    console.log(bonus);
    console.log(initalScore + bonus);

}
bonusScore(["15875"])