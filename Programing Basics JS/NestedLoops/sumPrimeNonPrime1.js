function sumPrimeNonPrime(input) {
 
    let i = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;
 
    let command = input[i];
    i++
 
    while (command !== "stop") {
 
        let isPrime = true;
 
        let currentNum = Number(command);
 
        if (currentNum < 0) {
 
            console.log("Number is negative.")
 
        } else {
 
            for (let div = 2; div < currentNum; div++) {
 
             
                if (currentNum % div === 0) {
                    isPrime = false;
                    break;
                }
            }
 
            if (isPrime) {
                primeSum += currentNum;
            } else {
                nonPrimeSum += currentNum;
            }
 
        }
 
        command = input[i];
        i++
    }
 
 
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}