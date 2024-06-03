import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BookList } from "./components/BookList";
import { Timer } from "./components/Timer";
import { Clicker } from "./components/Clicker";
import { Counter } from "./components/Counter";
function App() {
    const books = [
        {
            title: "Harry Potter",
            author: "JK Rowling",
            description: "Magic book",
        },
        {
            title: "Baskerville Dog",
            author: "Arthur Conan Doil",
            description: "Crime book",
        },
        {
            title: "Some book",
            author: "Some author",
            description: "fiction book",
        },
        {
            title: "I Robot",
            author: "Isaak Asimov",
            description: "Sci-fi book",
        },
    ];
    return (
        <div className="App">
            <header className="App-header">
                <Header title="Library" />
                {/*if children inside <header> Children </header> */}

                <Timer initial={1} />

                <Clicker />

                <BookList books={books} />

                <Counter />

                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
