// function activationKeys(input) {
//   const [actKey, ...commands] = input;
//   const key = actKey.split();
//   const result = commands.reduce((acc, curr) => {
//     const [comm, index] = curr.split(">>>");

//     if (comm === "Generate") {
//       return acc;
//     }
//     if (comm === "Contains") {

//     }
//     if (comm === "Flip") {

//     }
//     if (comm === "Slice") {
        
//     }
//   }, key);
//   console.log(result);
// }
function activationKeys(input){

}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
function activationKeys(input)
