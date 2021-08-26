function theatrePromotions(dayType, age) {
  if (dayType === "Weekday" && age >= 0 && age <= 18) {
    console.log("12$");
  } else if (dayType === "Weekday" && age > 18 && age <= 64) {
    console.log("18$");
  } else if (dayType === "Weekday" && age > 64 && age <= 122) {
    console.log("12$");
  } else if (dayType === "Weekend" && age >= 0 && age <= 18) {
    console.log("15$");
  } else if (dayType === "Weekend" && age > 18 && age <= 64) {
    console.log("20$");
  } else if (dayType === "Weekend" && age > 64 && age <= 122) {
    console.log("15$");
  } else if (dayType === "Holiday" && age >= 0 && age <= 18) {
    console.log("5$");
  } else if (dayType === "Holiday" && age > 18 && age <= 64) {
    console.log("12$");
  } else if (dayType === "Holiday" && age > 64 && age <= 122) {
    console.log("10$");
  } else if (age < 0 || age > 122) {
    console.log("Error!");
  }
}
theatrePromotions("Weekday", 42);
