function solve() {
  let textArea = document.getElementById("input").value;
  let formatted = document.getElementById("output");
  let sentences = textArea.split('.').filter((sentence) => sentence.length>0)
  for (let i = 0; i < sentences.length; i += 3) {
    let arr = [];
    for (let j = 0; j < 3; j++) {
        if (sentences[i + j]) {
            arr.push(sentences[i + j]);
        }
    }
    let paragraph = arr.join('. ') + '.';
    formatted.innerHTML += `<p>${paragraph}</p>`;
  }

}
