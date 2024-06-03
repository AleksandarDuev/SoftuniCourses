import { useState, useEffect } from "react";
import styles from './Book.module.css'

export const Book = (props) => {
  const [highlighted, setHighlighted] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    console.log("Mounting");
  }, []); // put an empty array => the action is only performed ones!

  useEffect(() => {
    console.log("Updating");
  }, [highlighted, deleted]);

  const clickHandler = () => {
    setHighlighted((state) => !state); // Дай ми стойността и при клик ми върни обратната стойност.
  };

  const deleteHandler = () => {
    setDeleted(true);
  };

  const style = {};

  if (highlighted) {
    style.backgroundColor = "green";
  }
  if (deleted) {
    return <h2>DELETED..</h2>;
  }

  return (
    <li style={style} className={styles['book-item']}>
      <article>
        <h2>{props.title}</h2>
        <div>Year: {props.year}</div>
        <div>Price: {props.price}</div>
        <footer>
          <button onClick={clickHandler}>highlight</button>
          <button onClick={deleteHandler}>Delete</button>

          <span>Author: {props.author}</span>
        </footer>
      </article>
    </li>
  );
};
