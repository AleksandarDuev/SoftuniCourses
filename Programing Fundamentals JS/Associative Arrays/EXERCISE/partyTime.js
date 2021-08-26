function partyTime(input) {
  let partyCommand = input.indexOf("PARTY");
  let vipList = [];
  let regularList = [];
  let digitlist = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  //add guests
  for (let i = 0; i < partyCommand; i++) {
    let currentGuest = input[i];
    if (digitlist.includes(currentGuest[0])) {
      vipList.push(currentGuest);
    } else {
      regularList.push(currentGuest);
    }
  }

  //remove guests
  for (let i = partyCommand + 1; i < input.length; i++) {
    let currentGuest = input[i];
    if (vipList.includes(currentGuest)) {
      vipList.splice(vipList.indexOf(currentGuest), 1);
    } else if (regularList.includes(currentGuest)) {
      regularList.splice(regularList.indexOf(currentGuest), 1);
    }
  }
  let toPrintList = vipList.concat(regularList);
  let totalGuestsCount = vipList.length + regularList.length;
  console.log(totalGuestsCount);
  console.log(toPrintList.join("\n"));
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
