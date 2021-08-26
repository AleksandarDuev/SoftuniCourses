function yardGreening(input) {
    let totalSquareMeters = Number(input[0]);
    let totalprice = totalSquareMeters * 7.61;
    let discount = totalprice * 0.18;
    let finalPrice = totalprice - discount
    console.log(`The final price is: ${finalPrice}`);
    console.log(`The discount is: ${discount}`);

}
yardGreening(["550"]);