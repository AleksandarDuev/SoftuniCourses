function worldTour(input) {
  const [initialTour, ...commands] = input;

  const result = commands.reduce((acc, current) => {
    const [comm, ...rest] = current.split(":");
    if (comm === "Travel") {
      return acc;
    }
    if (comm === "Add Stop") {
      let index = Number(rest[0]);
      let place = rest[1];
      if (index >= 0 && index < acc.length) {
        let first = acc.substring(0, index);
        let second = acc.substring(index);
        acc = first + place + second;
      }
      console.log(acc);
      return acc;
    }

    if (comm === "Remove Stop") {
      let index1 = Number(rest[0]);
      let index2 = Number(rest[1]);
      if (
        index1 >= 0 &&
        index1 < acc.length &&
        index2 >= 0 &&
        index2 < acc.length
      ) {
        let first = acc.substring(0, index1);
        let second = acc.substring(index2 + 1);
        acc = first + second;
      }
      console.log(acc);
      return acc;
    }
    if (comm === "Switch") {
      if (acc.includes(rest[0])) {
        let first = acc.substring(rest[0]);
        acc = acc.replace(rest[0], rest[1]);
      }
      console.log(acc);
      return acc;
    }

    return acc;
  }, initialTour);
  console.log(`Ready for world tour! Planned stops: ${result}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
