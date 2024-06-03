import { useState, useEffect } from "react";

import * as userService from "./services/userService";

import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from "./components/Search-bar/Search";
import { UserList } from "./components/user-list/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll()
        .then(users => setUsers(users));

    // fetch(`${serverUrl}/users`)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     //result.count
    //   });
  }, []);

  console.log(users);

  return (
    <div className="App">
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList users={users} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
