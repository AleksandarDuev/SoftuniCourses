function coins(input){
    let change = Number(input[0]);
    change = Math.floor(change * 100); // 1lv = 100 st.
    let countCoins = 0;
 
    while(change > 0){
        if(change >= 200){
            change -= 200;
            countCoins++;
        }else if(change >= 100){
            change-=100;
            countCoins++;
        }else if(change >= 50){
            change-= 50;
            countCoins++;
        }else if(change >= 20){
            change-= 20;
            countCoins++;
        }else if(change >= 10){
            change-= 10;
            countCoins++;
        }else if(change >= 5){
            change-= 5;
            countCoins++;
        }else if(change >= 2){
            change-= 2;
            countCoins++;
        }else if(change >= 1){
            change -= 1;
            countCoins++;
        }
    }
    console.log(countCoins);
}
coins(["1.23"]);