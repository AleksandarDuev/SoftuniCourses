function nationalCourt(inputString){
    const input = inputString.map(Number)
    const [first, second, third, clients] = input;
    if (clients === 0) {
        console.log(`Time needed: 0h.`);
        return;
    }

    const clientsPerHour = first + second + third;
    const hours = Math.ceil(clients/ clientsPerHour);
    const fix = hours % 3;
    const hToAdd = Math.floor(hours / 3);
    
    const result = fix === 0 ? hToAdd - 1 : hToAdd

    console.log(`Time needed: ${hours + result}h.`);
}
nationalCourt(["1",
"2",
"3",
"0"])

