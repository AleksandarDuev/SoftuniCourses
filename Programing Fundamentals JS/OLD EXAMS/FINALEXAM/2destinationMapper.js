// function destinationMapper(input) {
//   let count = 0;
//   let ourPlace = [];
//   let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g;
//   if (pattern.test(input)) {
//     let place = input.match(pattern);

//     place.forEach((destination) => {
//       count += destination.length - 2;
//       ourPlace.push(destination.slice(1, destination.length - 1));
//     });
//   }

//   console.log(`Destinations: ${ourPlace.join(", ")}`);
//   console.log(`Travel Points: ${count}`);
// }
// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
function destinationMapper(input) {
  let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g;
  let match = pattern.exec(input);
  let result = [];
  let travelPoints = 0;
  //while there is a match:
  //-store destination name(second group in regexp);
  //-find next match;
  //- calculate travel points(sum of destination names length)
  while (match !== null) {
    result.push(match[2]);
    travelPoints += match[2].length;
    match = pattern.exec(input);
  }
  //- print result.
  let destination = result.join(", ");

  console.log(`Destinations: ${destination}`);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
