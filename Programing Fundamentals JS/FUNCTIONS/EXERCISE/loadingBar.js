function loadingBar(number) {
  let percentages = "%".repeat(number / 10);
  let dots = ".".repeat(10 - number / 10);
  if (number === 100) {
    console.log(`${number}% Complete!`);
    console.log(`[${percentages}]`);
  } else {
    console.log(`${number}% [${percentages}${dots}]`);
    console.log(`Still loading...`);
  }
}

loadingBar(30);
