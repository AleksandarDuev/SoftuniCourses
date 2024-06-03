import { useEffect, useState } from "react";

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((result) => {
        setCharacters(result.results); // the "SWAPI" API returns object
      });
  }, []);

  return (
    <ul>
        {!characters.length && <li>Loading...</li>}
      {characters.map((character) => (
        <li key={character.name}>{character.name}</li>
      ))}
    </ul>
  );
};
