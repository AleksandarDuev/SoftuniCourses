function towns(input) {
  for (let town of input) {
    let tokens = town.split(" | ");
    let city = tokens[0];
    let latitude = Number(tokens[1]).toFixed(2);
    let longtitude = Number(tokens[2]).toFixed(2);
    let cityId = {
      town: city,
      latitude: latitude,
      longitude: longtitude,
    };
    console.log(cityId);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
