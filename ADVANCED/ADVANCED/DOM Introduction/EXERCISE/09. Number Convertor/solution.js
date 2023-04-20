function solve() {
 
    const select = document.getElementById("selectMenuTo");
    const binaryElement = document.createElement("option");
    const hexadecimalElement = document.createElement("option");
  
    binaryElement.textContent = "Binary";
    binaryElement.value = "binary";
    hexadecimalElement.value = "hexadecimal";
    hexadecimalElement.textContent = "Hexadecimal";
  
    select.appendChild(binaryElement);
    select.appendChild(hexadecimalElement);
  
    document.querySelector('div button').addEventListener("click", onClick);
  
    function onClick() {
       const convert = document.getElementById('selectMenuTo').value;
       const number = document.getElementById('input').value;
  
       const result = convert == 'binary' ? convertToBinary(number) : convertToHexadecimal(number);
  
       document.getElementById('result').value = result;
  
       function convertToBinary(n) {
          const binary = parseInt(n).toString(2);
          return binary;
       }
  
       function convertToHexadecimal(n) {
          const hexadecimal = parseInt(n, 10).toString(16).toUpperCase()
          return hexadecimal;
       }
  
    }
 }