import { useState, useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import * as gamesService from "./services/gamesService";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CreateGame from "./components/CreateGame/CreateGame";
import Catalog from "./components/Catalog/Catalog";
import GameDetails from "./components/GameDetails/GameDetails";
import uniqid from "uniqid";

function App() {
  const [games, setGames] = useState([]);

  const navigate = useNavigate();

  const addComment = (gameId, comment) => {
    setGames((state) => {
      const game = games.find((game) => game._id === gameId);

      const comments = game.comments || [];
      comments.push(comment);

      return [
        ...state.filter((game) => game._id !== gameId),
        { ...game, comments },
      ];
    });
  };

  const addGameHandler = (gameData) => {
    setGames((state) => [...state, { ...gameData, _id: uniqid() }]);
    navigate("/catalog");
  };

  useEffect(() => {
    gamesService.getAllGames().then((result) => {
      console.log(result);
      setGames(result);
    });
  }, []);

  return (
    <div id="box">
      <Header />

      {/* Main Content */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create"
            element={<CreateGame addGameHandler={addGameHandler} />}
          />
          <Route path="/catalog" element={<Catalog games={games} />} />
          <Route
            path="/catalog/:gameId"
            element={<GameDetails games={games} addComment={addComment} />}
          />
        </Routes>
      </main>

      {/* Edit Page ( Only for the creator )*/}
      {/* <section id="edit-page" className="auth">
        <form id="edit">
          <div className="container">
            <h1>Edit Game</h1>
            <label htmlFor="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" defaultValue="" />
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" defaultValue="" />
            <label htmlFor="levels">MaxLevel:</label>
            <input
              type="number"
              id="maxLevel"
              name="maxLevel"
              min={1}
              defaultValue=""
            />
            <label htmlFor="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" id="summary" defaultValue={""} />
            <input
              className="btn submit"
              type="submit"
              defaultValue="Edit Game"
            />
          </div>
        </form>
      </section> */}
    </div>
  );
}

export default App;