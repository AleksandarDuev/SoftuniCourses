// import { Timer } from "./Timer";
// import { Clicker } from "./Clicker";

// we can use arrow function for the components!

const Header = (props) => {
  return (
    <header className="App-header">
      <h1>{props.text}</h1>
      <p></p>
    </header>
  );
};

export default Header;
