
import { Book } from "./Book";

export const BookList = (props) => {
  

  const bookElements = props.books.map((book, i) => (
    <Book
      key={i}
      {...book}
      // title={book.title}
      // year={book.year}
      // price={book.price}
      // author={book.author}
    />
  ));

  //   for (const book of props.books) {
  //     bookElements.push(
  //       <li>
  //         <article>
  //           <h2>{book.title}</h2>
  //           <div>Year: {book.year}</div>
  //           <div>Price: {book.price}</div>
  //           <footer>
  //             <span>Author: {book.author}</span>
  //           </footer>
  //         </article>
  //       </li>
  //     );
  //   }

  return <ul>{bookElements}</ul>;
};
