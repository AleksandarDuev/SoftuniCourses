function task(input) {
  const inoutInNum = input.map(Number);
  const [days, budget, pplCout, fuelPrice, foodExp, hotelPerNight, ...rest] =
    inoutInNum;

  const foodTotal = pplCout * foodExp * days;
  const hotelTotal = pplCout * hotelPerNight * days;
  

  let expenses = foodTotal + hotelTotal;

  for (let i = 1; i < rest.length + 1; i++) {
    const dayFuel = rest[i - 1] * fuelPrice;
    if ((i % 3 === 0 || i % 5 === 0) && i !== 0) {
      expenses += dayFuel;
      expenses += expenses  * 0.4;
    } else {
      expenses += dayFuel;
    }
    if (i % 7 === 0) {
      // expenses += dayFuel
      let reduce = expenses   / pplCout;

      expenses -= reduce;
    }

    if(expenses > budget ){
      console.log('1');
      console.log(
        `Not enough money to continue the trip. You need ${(
          expenses - budget
        ).toFixed(2)}$ more.`
      )
      return;
    }
  }

  if ( budget - expenses >= 0) {
    console.log(
      `You have reached the destination. You have ${(budget - expenses).toFixed(
        2
      )}$ budget left.`
    );
  } else {
    console.log(
      `Not enough money to continue the trip. You need ${(
        expenses - budget
      ).toFixed(2)}$ more.`
    );
  }
}

task(["10",
"20500",
"11",
"1.2",
"8",
"13",
"100",
"150",
"500",
"400",
"600",
"130",
"300",
"350",
"200",
"300"])

