import "../css/todo.css";
import React, { useState } from 'react';
import ToDoList from "./ToDoList";

function ToDoCreate( {onCreateTodo}) {

    const [newTodo, setNewTodo] = useState('');

    const createTodo = () => {
        if(!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newTodo
        };
        onCreateTodo(request);
        setNewTodo(''); // inputu temizle
    };

  return (
      <div className="container">
        <input  value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
        type="text" placeholder="Enter ToDo" className="enter-todo-input"/>
        <button onClick={createTodo}>Create ToDo</button>
      </div>

  )
}

export default ToDoCreate;
