function footballS(input) {
    let team = input[0];
    let suv = input[1];
    let suvCount = Number(input[2]);
    let price = 0;
    if (team === "Argentina" && suv === "flags") {
        price = suvCount * 3.25;
    } else if (team === "Brazil" && suv === "flags") {
        price = suvCount * 4.20;
    } else if (team === "Croatia" && suv === "flags") {
        price = suvCount * 2.75;
    } else if (team === "Denmark" && suv === "flags") {
        price = suvCount * 3.10;
    }
    if (team === "Argentina" && suv === "caps") {
        price = suvCount * 7.20;
    } else if (team === "Brazil" && suv === "caps") {
        price = suvCount * 8.50;
    } else if (team === "Croatia" && suv === "caps") {
        price = suvCount * 6.90;
    } else if (team === "Denmark" && suv === "caps") {
        price = suvCount * 6.50;
    }
    if (team === "Argentina" && suv === "posters") {
        price = suvCount * 5.10;
    } else if (team === "Brazil" && suv === "posters") {
        price = suvCount * 5.35;
    } else if (team === "Croatia" && suv === "posters") {
        price = suvCount * 4.95;
    } else if (team === "Denmark" && suv === "posters") {
        price = suvCount * 4.80;
    }
    if (team === "Argentina" && suv === "stickers") {
        price = suvCount * 1.25;
    } else if (team === "Brazil" && suv === "stickers") {
        price = suvCount * 1.20;

    } else if (team === "Croatia" && suv === "stickers") {
        price = suvCount * 1.10;
    } else if (team === "Denmark" && suv === "stickers") {
        price = suvCount * 0.90;
    }
    if (team !== "Argentina" && team !== "Brazil" && team !== "Croatia" && team !== "Denmark") {
        console.log("Invalid country!");

    } else if (suv !== "flags" && suv !== "caps" && suv !== "posters" && suv !== "stickers") {
        console.log("Invalid stock!");

    } else {
        console.log(`Pepi bought ${suvCount} ${suv} of ${team} for ${price.toFixed(2)} lv.`);
    }

}
footballS(["Brazil",
    "stickers",
    "5"])
