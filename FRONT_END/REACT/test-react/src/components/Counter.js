import { useState } from "react";

export const Counter = (props) => {
  const [counter, setCounter] = useState(props.start || 0);

  const increaseHandler = (e) => {
    setCounter((oldCounter) => oldCounter + 1);
  };

  const decreaseHandler = () => {
    setCounter((oldCounter) => oldCounter - 1);
  };

  const clearHandler = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increaseHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
      <button onClick={clearHandler}>reset</button>
    </div>
  );
};
