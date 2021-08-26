function charityCampaign(input) {
    let campaignDays = Number(input[0]);
    let confectionersCount = Number(input[1]);
    let cakesCount = Number(input[2]);
    let wafflesCount = Number(input[3]);
    let pancakesCount = Number(input[4]);
    oneConfectionerSumPerDay = (cakesCount * 45) + (wafflesCount * 5.80) + (pancakesCount * 3.20);
    totalSumPerDay = confectionersCount * oneConfectionerSumPerDay;
    totalSum = campaignDays * totalSumPerDay;
    Overall = totalSum - (totalSum / 8);
    console.log(Overall.toFixed(2));
}
charityCampaign(["23", "8", "14", "30", "16"]);