import { useState } from "react";

export const Counter = (props) => {
    const [count, setCount] = useState(props.initial || 0);

    const increaseHandler = () => {
        setCount((oldCount) => oldCount + 1);
    };

    const decreaseHandler = () => {
        setCount((oldCount) => oldCount - 1);
    };

    const clearHandler = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={increaseHandler}> + </button>
            <button onClick={decreaseHandler}> - </button>
            <button onClick={clearHandler}> Clear </button>
        </div>
    );
};
