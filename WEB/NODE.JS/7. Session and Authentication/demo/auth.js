const bcrypt = require("bcrypt"); // hash library

module.exports = () => {
  const users = {
    peter: {
      username: "peter",
      hashedPassword: "123",
    },
  };

  return (req, res, next) => {
    const auth = {
      login,
      register,
    };

    next();

    async function login(username, password) {
      const user = Object.values(users).find((u) => u.username == username);
      if (user && await bcrypt.compare(password,user.hashedPassword)) {
        console.log("Successful login");
        req.session.user = user;
        return true;
      } else {
        return false;
      }
    }

    async function register(username, password) {
      if (
        Object.values(users).find((u) => u.username == username) !== undefined
      ) {
        return false;
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const id = "xxxx-xxxx".replace(/x/g, () =>
          ((Math.random() * 16) | 0).toString(16)
        );
        const user = {
          id,
          username,
          hashedPassword,
        };
        users[id] = user;
        console.log("register successful" + username);
        return true;
      }
    }
  };
};
