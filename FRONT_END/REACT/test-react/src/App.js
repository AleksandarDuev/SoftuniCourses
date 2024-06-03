import "./App.css";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import { Clicker } from "./components/Clicker";
import { Timer } from "./components/Timer";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Header text="Hello React!" />
      <Counter />
      <Clicker />
      <Timer />
      <Footer />
    </div>
  );
}

export default App;
