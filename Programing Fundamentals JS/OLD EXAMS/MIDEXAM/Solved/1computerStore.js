// function computerStore(arr) {
//   let priceWithoutTaxes = 0;
//   let taxes = 0;
//   let totalPrice = 0;

//   let command = arr.shift();
//   let price = 0;

//   while (true) {
//     if (command === "regular" || command === "special") {
//       break;
//     }
//     price = Number(command);

//     if (price <= 0) {
//       console.log("Invalid price!");
//     } else {
//       priceWithoutTaxes += price;
//     }
//     command = arr.shift();
//   }
//   taxes = (20 / 100) * priceWithoutTaxes;
//   totalPrice = priceWithoutTaxes + taxes;

//   if (command === "special") {
//     let discount = (10 / 100) * totalPrice;
//     totalPrice -= discount;
//   }
//   if (totalPrice <= 0) {
//     console.log("Invalid order!");
//   } else {
//     console.log("Congratulations you've just bought a new computer!");
//     console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
//     console.log(`Taxes: ${taxes.toFixed(2)}$`);
//     console.log("-----------");
//     console.log(`Total price: ${totalPrice.toFixed(2)}$`);
//   }
// }
function computerStore(input) {
  let price = 0;
  let taxes = 0;
  let totalPrice = 0;
  let command = input.shift();
  let currentPrice = 0;
  while (true) {
    if (command === "special" || command === "regular") {
      break;
    }
    currentPrice = Number(command);

    if (currentPrice < 1) {
      console.log("Invalid price!");
    } else {
      price += currentPrice;
    }
    command = input.shift();
  }
  taxes = price * 0.2;
  totalPrice = price + taxes;
  if (command === "special") {
    let discount =  totalPrice * 0.1;
    totalPrice -= discount;
  }
  if (totalPrice <= 0) {
    console.log("Invalid order!");
  } else {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${price}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
  }
}
computerStore(["regular"]);
