function extractFlle(text) {
  tokens = text.split("\\");
  let needed = tokens.pop();
  let index = needed.lastIndexOf(".");
  let fileName = needed.substring(0, index);
  let extension = needed.substring(index + 1, needed.length);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFlle("C:\\Internal\\training-internal\\Template.pptx");
