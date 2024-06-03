import { useState } from "react";
import { useParams } from "react-router-dom";

const GameDetails = ({ games, addComment }) => {
  const { gameId } = useParams();
  const [comment, setComment] = useState({
    username: "",
    comment: "",
  });

  const [error, setError] = useState({
    username: "",
    comment: "",
  });

  const game = games.find((x) => x._id === gameId);

  //   console.log(game);

  const addCommentHandler = (e) => {
    e.preventDefault();
    addComment(gameId, `${comment.username}:${comment.comment}`);
    console.log(comment);
  };

  const validateUsername = (e) => {
    const username = e.target.value;
    if (username.length < 4) {
      setError((state) => ({
        ...state,
        username: "username must be at least 4 characters long",
      }));
    }
  };

  const onChange = (e) => {
    setComment((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} alt="" />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {game.comments?.map((x) => (
              <li className="comment" key={x._id}>
                <p>{x}</p>
              </li>
            ))}
          </ul>
          {!game.comments && <p className="no-comment">No comments.</p>}
        </div>

        {/* <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div> */}
      </div>

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHandler}>
          <input
            type="text"
            name="username"
            placeholder="Pesho"
            onBlur={validateUsername}
            onChange={onChange}
            value={comment.username}
          />

          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={onChange}
            value={comment.comment}
          />

          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
};
export default GameDetails;
