import React from "react";
import "./App.css";

function ToDoInput() {
  return (
    <div className="container">
      <div className="todo-input">
        <form action="" className="form-inline">
          <div className="form-group todo-input">
            <input
              className="form-control"
              type="text"
              name="todo-input-text"
              id="todo-input-text"
              placeholder="Enter content here..."
              required
            />
            <input
              className="form-control"
              type="time"
              name="todo-input-date"
              id="todo-input-date"
              required
            />
            <input
              className="form-control"
              type="date"
              name="todo-input-time"
              id="todo-input-time"
              required
            />
            <button
              type="submit"
              className="btn btn-primary form-control"
              onClick="#"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function TodoOutput() {
  return <div className="container"> Output Here </div>;
}

function App() {
  return (
    <div>
      <ToDoInput />
      <TodoOutput />
    </div>
  );
}

export default App;
