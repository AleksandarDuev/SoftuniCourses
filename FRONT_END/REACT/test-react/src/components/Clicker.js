import { useState } from "react";

export const Clicker = () => {
  const [clicks, setClicks] = useState(0);

  const clickHandler = (e) => {
    setClicks((oldClicks) => oldClicks + 1); // right way
  };

  return (
    <div>
        <div>
            {clicks > 10                   // conditional rendering
            ? 'medium clicks' 
            : 'normal clicks'
            }
        </div>
      <button onClick={clickHandler}>{clicks}</button>
    </div>
  );
};
