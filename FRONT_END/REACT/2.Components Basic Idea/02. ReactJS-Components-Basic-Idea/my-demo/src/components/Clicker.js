import { useState } from "react";

export const Clicker = () => {
    const [click, setClicks] = useState(0);

    const clickHandler = (e) => {
        setClicks((oldClicks) => oldClicks + 1);
    };

    const dangerClicks = click > 20;

if(click > 30){
    return <h1>Clicks finished!!</h1>;
}

    return (
        <div>
            {dangerClicks && <h1>Danger clicks!!!</h1>}
            <h3>{click >10 ? 'Medium clicks' : 'Normal clicks'}</h3>
            <button onClick={clickHandler}>Clicks:{click}</button>
        </div>
    );
};
