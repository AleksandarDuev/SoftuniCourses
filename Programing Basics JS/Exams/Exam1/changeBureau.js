function changeBureau(input) {
    let bitcoinCount = Number(input[0]);
    let uanCount = Number(input[1]);
    let commission = Number(input[2]);
    let leva = 1;
    let euro = leva * 1.95;
    let dollar = leva * 1.76;
    let bitCoin = leva * 1168;
    let uan = dollar * 0.15;
    totalBitcoin = (bitCoin * bitcoinCount);
    totalUan = (uan * uanCount);
    totalEuro = ((totalUan + totalBitcoin) / euro);
    totalComisson = totalEuro * commission / 100;
    result = (totalEuro - totalComisson).toFixed(2);
    console.log(result);
}
changeBureau(["20", "5678", "2.4"])
