//different syntax! arrow function
import logo from "./logo.svg";

const Header = (props) => {
  return (
    <header className="App-header">
      <h1>{props.text}</h1>

      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
