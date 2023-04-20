function roadRadar(speed, zone) {
  speed = Number(speed);
  let speedLimit = 0;
  let differenceInSpeed = 0;
  let status;
  if (zone === "motorway") {
    speedLimit = 130;
  } else if (zone === "interstate") {
    speedLimit = 90;
  } else if (zone === "city") {
    speedLimit = 50;
  } else {
    speedLimit = 20;
  }
  if (speed <= speedLimit) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  }
  if (speed > speedLimit) {
    differenceInSpeed = speed - speedLimit;
    if (differenceInSpeed <= 20) {
      status = "speeding";
      console.log(
        `The speed is ${differenceInSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else if (differenceInSpeed <= 40) {
      status = "excessive speeding ";
      console.log(
        `The speed is ${differenceInSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else if (differenceInSpeed > 40) {
      status = "reckless driving  ";
      console.log(
        `The speed is ${differenceInSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    }
  }
}
roadRadar(40, "city");
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway')
