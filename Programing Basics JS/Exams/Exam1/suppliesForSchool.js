function suppliesForSchool(input){
let penPacks = Number(input[0]);
let markerPacks = Number(input[1]);
let cleaningLiquid = Number(input[2]);
let discount = Number(input[3]);
totalPenPacks = penPacks * 5.80;
totalMarkerPacks = markerPacks * 7.20;
totalliquid = cleaningLiquid * 1.20;
cost = totalMarkerPacks + totalPenPacks + totalliquid;
totalcost = cost - ((cost * discount) / 100);
console.log(totalcost.toFixed(3));
}
suppliesForSchool(["2", "3", "2.5", "25"])