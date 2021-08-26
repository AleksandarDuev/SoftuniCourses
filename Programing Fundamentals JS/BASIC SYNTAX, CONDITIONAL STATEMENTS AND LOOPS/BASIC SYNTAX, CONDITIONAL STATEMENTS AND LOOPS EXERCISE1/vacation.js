function vacation(group, type, day) {
  let price = 0;
  if (type === "Students" && day === "Friday") {
    price = group * 8.45;
    if (group >= 30) {
      price *= 0.85;
    }
  } else if (type === "Students" && day === "Saturday") {
    price = group * 9.8;
    if (group >= 30) {
      price *= 0.85;
    }
  } else if (type === "Students" && day === "Sunday") {
    price = group * 10.46;
    if (group >= 30) {
      price *= 0.85;
    }
  } else if (type === "Business" && day === "Friday") {
    if (group >= 100) {
      group -= 10;
    }
    price = group * 10.9;
  } else if (type === "Business" && day === "Saturday") {
    if (group >= 100) {
      group -= 10;
    }
    price = group * 15.6;
  } else if (type === "Business" && day === "Sunday") {
    if (group >= 100) {
      group -= 10;
    }
    price = group * 16;
  } else if (type === "Regular" && day === "Friday") {
    price = group * 15;
    if (group >= 10 && group <= 20) {
      price *= 0.95;
    }
  } else if (type === "Regular" && day === "Saturday") {
    price = group * 20;
    if (group >= 10 && group <= 20) {
      price *= 0.95;
    }
  } else if (type === "Regular" && day === "Sunday") {
    price = group * 22.5;
    if (group >= 10 && group <= 20) {
      price *= 0.95;
    }
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
vacation();
