export function setUserData(data) {
  sessionStorage.setItem("UserData", JSON.stringify(data));
}

export function getUserData() {
  return JSON.parse(sessionStorage.getItem("UserData"));
}

export function clearUserData() {
  sessionStorage.removeItem("UserData");
}


