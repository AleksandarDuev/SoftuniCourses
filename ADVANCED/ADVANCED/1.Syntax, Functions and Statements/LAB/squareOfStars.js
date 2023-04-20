function squareOfStars(n) {
  
    for (let i = 1; i <= n; i++) {
    let printLine = "";
    for (let h = 1; h <= n; h++) {
      printLine += "* ";
    }
    console.log(printLine);
  }
}

squareOfStars(3);
