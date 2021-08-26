function numbers(input) {
    let arr = input.split(' ').map(Number).filter((x, i, newArr) => {
        let avg = newArr.reduce((previous, current) => previous + current, 0) / newArr.length;
        return x > avg;
    }).sort((a, b) => b - a).splice(0, 5);
    return arr.length === 0 ? `No` : arr.join(' ');
    console.log(arr);
}
numbers['10 20 30 40 50']