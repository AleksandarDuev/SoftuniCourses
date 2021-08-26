function bookShelf(input) {
  let shelf = {};
  for (let line of input) {
    if (line.includes("->")) {
      createShelf(shelf, line);
    } else {
      storeBook(shelf, line);
    }
  }
  let sorted = Object.entries(shelf).sort(compareShelf);
  for (let [id, shelf] of sorted) {
    console.log(`${id} - ${shelf.gener}: ${books.length}`);
    for (let book of shelf.books){
        console.log(`--> ${book.title}: ${book.author}`);
    }
  }
  function compareShelf(a, b) {
return 0
  }

  function createShelf(shelf, line) {
    let [id, gener] = line.split(" -> ");
    if (shelf[id] === undefined) {
      shelf[id] = {
        gener,
        books: [],
      };
    }
  }
  function storeBook(shelf, line) {
    let [title, rest] = line.split(": ");
    let [author, gener] = rest.split(", ");
    let newShelf = Object.entries(shelf).find(([id, b]) => b.gener === gener);
    if (newShelf !== undefined) {
      newShelf[1].books.push({ title, author });
    }
  }
}
bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);
