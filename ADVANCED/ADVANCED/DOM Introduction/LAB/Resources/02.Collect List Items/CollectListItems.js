function extractText() {
  // let itemNodes = document.querySelectorAll("#items li");
  // let textarea = document.querySelector("#result");                              //alternative
  // for (let node of itemNodes) {
  //   textarea.value += node.textContent + "\n";
  // }

  // const itemNodes = document.getElementById("items").children; // different selecting
  // const textarea = []; 
  // for (let node of Array.from(itemNodes)) {
  //    textarea.push(node.textContent)
  // }
  // document.getElementById("result").textContent = textarea.join("\n");

  const itemNodes = document.getElementById("items").children; // different selecting
  const textarea = []; 
  const result = [...itemNodes].map(e=>e.textContent).join("\n");
  document.getElementById("result").value = result
}
