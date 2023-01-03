import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import AddIcon from "./assets/icons/add.svg";
import Trash from "./assets/icons/trash.svg";
import Update from "./assets/icons/trash.svg";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;
  const form = document.querySelector(".form");

  const addTodo = async (e) => {
    e.preventDefault();
    const todo = { newTodo: newTodo };
    try {
      await axios.post(`${BACKEND_URL}/todos`, todo);
      form.reset();
      setTodos([...todos, { newTodo: newTodo }]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/todos/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/todos`);
        setTodos(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="todo__title">to-do list</h1>
        <div className="todo">
          <form className="form">
            <input
              type="text"
              name="todoEntry"
              className="todo__input"
              placeholder="Add a todo"
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button className="todo__btn" onClick={addTodo}>
              <img src={AddIcon} />
            </button>
          </form>
        </div>
        {todos?.map((todo) => {
          return (
            <div className="todo__container" key={todo.id}>
              <input type="checkbox" className="todo__checkbox" />
              <div>
                <p>{todo.newTodo}</p>
              </div>
              <button
                className="todo__delete"
                onClick={() => deleteTodo(todo.id)}
              >
                <img className="trash-icon" src={Trash} />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
