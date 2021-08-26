function addBags(input) {
    let over20KgPrice = Number(input[0]);
    let baggajeKg = Number(input[1]);
    let tripDays = Number(input[2]);
    let baggajeCount = Number(input[3]);
    let to10KgPrice = over20KgPrice * 0.2;
    let fr10To20Kg = over20KgPrice * 0.5;
    let bagajePrice = 0;
    
    
    if (baggajeKg < 10){
    bagajePrice = to10KgPrice;
    }else if(baggajeKg >= 10 && baggajeKg <= 20){
        bagajePrice = fr10To20Kg;
    }else{
        bagajePrice = over20KgPrice;
    }
    if (tripDays > 30){
        bagajePrice *= 1.1;
    }else if(tripDays >= 7 && tripDays <=30 ){
        bagajePrice *= 1.15;
    }else if(tripDays < 7){
        bagajePrice *= 1.4;
    }
    console.log(`The total price of bags is: ${(bagajePrice * baggajeCount).toFixed(2)} lv. `)

}
addBags(["30", "18", "15", "2"]);