import { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((response) => response.json())
      .then((result) => {
        setTodos(Object.values(result));
      });
  }, []);

  const todoClicksHandler = (todo) => {
    fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted }),
    })
      .then((res) => res.json())
      .then((modifiedTodo) => {
        setTodos(oldTodos =>
          oldTodos.map(todo =>
            todo._id === modifiedTodo._id ? modifiedTodo : todo
          )
        );
      })
    };

    return (
      <table className="table">
        <thead>
          <tr>
            <th className="table-header-task">Task</th>
            <th className="table-header-status">Status</th>
            <th className="table-header-action">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <ToDoItem key={todo._id} {...todo} onClick={todoClicksHandler} />
          ))}
        </tbody>
      </table>
    );
  };

