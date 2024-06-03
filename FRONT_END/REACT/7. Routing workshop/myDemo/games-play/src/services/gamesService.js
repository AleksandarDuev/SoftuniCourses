const baseUrl = "http://localhost:3030";

export const getAllGames = () => {
  return fetch(`${baseUrl}/data/games`)
    .then((response) => response.json());
};
