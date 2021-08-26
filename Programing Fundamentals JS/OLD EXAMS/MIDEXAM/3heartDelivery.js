function heartDelivery(input) {
  const [stringList, ...commands] = input;

  const numberList = stringList.split("@").map(Number);
  const result = commands.reduce(
    (acc, curr) => {
      const { list, lastIndex } = acc;
      const [comm, number] = curr.split(" ");
      if (comm === "Love!") {
        return acc;
      }
      jump = Number(number);
      const length = numberList.length;

      const index =( lastIndex + jump) >= length ? 0 : lastIndex + jump;
      // console.log({ index, jump, length, lastIndex });

      if (list[index] === 0) {
        console.log(`Place ${index} already had Valentine's day.`);
        return acc;
      }
      const newHearts = list[index] - 2;
      list[index] = newHearts < 0 ? 0 : newHearts;
      if (list[index] === 0) {
        console.log(`Place ${index} has Valentine's day.`);
      }

      return { list, lastIndex: index };
    },
    { list: numberList, lastIndex: 0 }
  );
  const faild = result.list.filter((x) => x !== 0);

  console.log(`Cupid's last position was ${result.lastIndex}.`);
  console.log(`Cupid has failed ${faild.length} places.`);
}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love! "]
);
