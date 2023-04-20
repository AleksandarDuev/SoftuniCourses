import * as api from "./api.js";

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function getAllTheatres() {
  return api.get("/data/theaters?sortBy=_createdOn%20desc&distinct=title");
}

export async function getTheatreId(id) {
  return api.get(`/data/theaters/${id}`);
}

export async function getMyTheatres(userId) {
  return api.get(
    `/data/theaters?where=_ownerId%3D%22{userId}%22&sortBy=_createdOn%20desc`
  );
}

export async function createTheatre(theatre) {
  return api.post("/data/theaters", theatre);
}

export async function editTheatre(id, theatre) {
  return api.put(`/data/theaters/${id}`, theatre);
}

export async function deleteTheatre(id) {
  return api.del(`/data/theaters/${id}`);
}