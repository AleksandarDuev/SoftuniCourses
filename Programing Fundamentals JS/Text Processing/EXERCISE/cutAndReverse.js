function cutAndReverse(text) {
  text1 = text.substring(0, text.length / 2);
  text2 = text.substring(text.length / 2);

  console.log(text1.split("").reverse().join(""));
  console.log(text2.split("").reverse().join(""));
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
