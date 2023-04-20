function commandProcessor() {
  let string = "";
  return {
      append,
      removeStart,
      removeEnd,
      print
  }
  
  function append(str) {
    string += str;
  }
  function removeStart(n) {
    string = string.slice(n);
  }
  function removeEnd(n) {
    string = string.slice(0, -n);
  }
  function print() {
    console.log(string);
  }
}
const firstZeroTest = commandProcessor();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

console.log(firstZeroTest);


