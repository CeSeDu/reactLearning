import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import ToDoCreate from './components/ToDoCreate';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
console.log(todos)
 
  return (
    <>
      <div className="main-container">
        <ToDoCreate onCreateTodo={createTodo} />
        <ToDoList todos={todos} />
      </div>
    </>
  );
}

export default App;
