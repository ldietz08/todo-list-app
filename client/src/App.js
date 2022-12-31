import "./App.scss";
import addIcon from "./assets/icons/add.svg";

function App() {
  return (
    <div className="App">
      <h1 className="todo__title">to-do list</h1>
      <div className="todo">
        <input type="text" name="todoEntry" placeholder="Add a todo" />
        <button class="todo__btn">
          <img src={addIcon} />
        </button>
      </div>
    </div>
  );
}

export default App;
