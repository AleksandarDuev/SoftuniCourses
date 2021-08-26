// let text = 'Today is 2015-05-11';
// let regexp = /\d{4}-\d{2}-\d{2}/g
// let hasMatch = regexp.test(text);
// console.log(hasMatch);
//returns true or false

// let text = 'Peter: 123, Mark:456';
// let pattern = /\d+/g;
// let match = text.match(pattern);
// console.log(match);
//returns Matching elements.

// let text = 'Peter: 123, Mark:456';
// let pattern = /\d+/;
// let match1 = text.match(pattern);
// let match2 = pattern.exec(text);
// console.log(match1);
// Console.log(match2);
// // if regexp not global( missing " /g") math1 and match2 work same way.
// // else

function matchFullName(input) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let match = pattern.exec(input);
  let result = []; 
  
  while (match !== null) {
    result.push(match[0])
    match = pattern.exec(input);
  }
  console.log(result.join(" "));
}
matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
