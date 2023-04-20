import { clearUserData, getUserData, setUserData } from "../util.js";
import { notify } from "../views/notify.js";

const host = "http://localhost:3030";

// universal request function
async function request(url, options) {
  try {
    const response = await fetch(host + url, options);

    if (response.ok !== true) {
      if (response.status == 403) {
        clearUserData();
      }

      const error = await response.json();
      throw new Error(error.message);
    }
    try {
      return  await response.json();
    } catch {
      return response;
    }
  
} catch (err) {
    //alert(err.message);
    notify(err.message)
    throw err;
  }
}

//function for request options
function createOptions(method = "get", data) {
  const options = {
    method,
    headers: {},
  };
  if (data !== undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const userData = getUserData();
  if (userData) {
    options.headers["X-Authorization"] = userData.token;
  }

  return options;
}

export async function get(url) {
  return request(url, createOptions());
}

export async function post(url, data) {
  return request(url, createOptions("post", data));
}

export async function put(url, data) {
  return request(url, createOptions("put", data));
}

export async function del(url) {
  return request(url, createOptions("delete"));
}

export async function login(email, password) {
  const result = await post("/users/login", { email, password });

  const userData = {
    username: result.username,
    email: result.email,
    id: result._id,
    gender: result.gender,
    token: result.accessToken,
  };
  setUserData(userData);

  return result; // not necessary
}

export async function register(username, email, password, gender) {
  const result = await post("/users/register", {
    username,
    email,
    password,
    gender,
  });

  const userData = {
    username: result.username,
    email: result.email,
    id: result._id,
    gender: result.gender,
    token: result.accessToken,
  };
  setUserData(userData);

  return result; // not necessary
}

export async function logout() {
  await get("/users/logout");
  clearUserData();
}


