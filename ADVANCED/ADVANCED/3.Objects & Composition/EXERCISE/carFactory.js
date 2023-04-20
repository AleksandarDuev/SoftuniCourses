function carFactory(veichle) {
 const{
   model,
  power,
   carriage,
   color,
   wheelsize
} = veichle
  function getEngine(power) {
    const engines = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 },
    ];

    return engines.find((engine) => engine.power >= power);
  }
  function getCarriage(carriage, color) {
    return {
      type: carriage,
      color,
    };
  }
  function getWheels(wheelsize){
      let wheel = wheelsize% 2 === 0? wheelsize-1 : wheelsize;
      return [wheel, wheel, wheel, wheel];
 }

  const car = {
    model: model,
    engine: getEngine(power),
    carriage: getCarriage(carriage, color),
    wheels: getWheels(wheelsize),
  };

  return car;
}

console.log(carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
}));
