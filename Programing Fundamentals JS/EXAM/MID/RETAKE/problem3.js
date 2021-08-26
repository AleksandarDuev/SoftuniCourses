function task(input) {
  let [list, ...command] = input;
  let bookList = list.split("&");

  let result = command.reduce((acc, curr) => {
    let [comm, ...rest] = curr.split(" | ");
    if (comm === "Done") {
      return acc;
    }
    if (comm === "Add Book") {
      if (!acc.includes(rest[0])) {
        return [rest[0], ...acc];
      }
      return acc;
    }
    if (comm === "Take Book") {
      if (acc.includes(rest[0])) {
        let index = acc.indexOf(rest[0]);
        let first = acc.slice(0, index);
        let last = acc.slice(index + 1, acc.length);

        return [...first, ...last];
      }
      return acc;
    }

    if (comm === "Swap Books") {
      if (acc.includes(rest[0]) && acc.includes(rest[1])) {
        let index1 = acc.indexOf(rest[0]);
        let index2 = acc.indexOf(rest[1]);
        let first = acc.slice(0, index1);
        let last = acc.slice(index1 + 1, acc.length);
        let newArr = [...first, rest[1], ...last];
        let first2 = newArr.slice(0, index2);
        let last2 = newArr.slice(index2 + 1, acc.length);
        return [...first2, rest[0], ...last2];
      }
      return acc;
    }
    if (comm === "Insert Book") {
      return [...acc, rest[0]];
    }

    if (comm === "Check Book") {
      let index = Number(rest[0]);
      if (index >= 0 && index <= acc.length) {
        console.log(acc[index]);
        return acc;
      }
      return acc;
    }
    return acc;
  }, bookList);
  console.log(result.join(", "));
}

task(["Anna Karenina&Heart of Darkness&Catch-22& The Stranger",
"Add Book | David Copperfield",
"Add Book | One Thousand and One Nights",
"Swap Books | One Thousand and One Nights | Catch-22",
"Take Book | David Copperfield",
"Insert Book | The Stories of Anton Chekhov",
"Check Book | 17",
"Done"])
