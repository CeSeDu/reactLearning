import React from 'react'
import ToDo from './ToDo'
import "../css/todo.css"

function ToDoList({todos}) {
  return (
    <div className='todos-container'>
        {
         todos && todos.map((todo) => (
            <ToDo key={todo.id} todo={todo} />
         ))   
        }
    </div>
  )
}

export default ToDoList