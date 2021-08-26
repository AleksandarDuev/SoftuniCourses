function bisquits(arr) {
  const biquitsPerWorker = Number(arr[0]);
  const workers = Number(arr[1]);
  const toCompare = Number(arr[2]);
  const productionPerDay = biquitsPerWorker * workers;
  const productionFor30Days = (productionPerDay * 20) + Math.floor(productionPerDay * 10 * 0.75);
  
  const dif = productionFor30Days - toCompare;

  const persentage = (dif / toCompare) * 100;
  const newPercent = persentage;

  console.log(
    `You have produced ${productionFor30Days} biscuits for the past month.`
  );
  if (productionFor30Days > toCompare) {
    console.log(`You produce ${(productionFor30DaysnewPercent)} percent more biscuits.`);
  } else {
    console.log(
      `You produce ${Math.floor(newPercent).toFixed(2)} percent less biscuits.`
    );
  }
}
bisquits(["78",
"8",
"16000"])

