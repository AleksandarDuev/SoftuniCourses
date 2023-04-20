// function cityRecord(name, population, treasury) {
// const city= {}
// city.name= name;
// city.population= population;                 alternative
// city.treasury = treasury

// return city;
// }
function cityRecord(name, population, treasury) {
    return {
      name,
      population,
      treasury
    };
  }
  
cityRecord("Tortuga", 7000, 15000);
