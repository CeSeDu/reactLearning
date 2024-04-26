import React from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

function ToDo({ todo }) {
  return (

        <div className='todo-container'>
            <div className="todo-content">
            {todo.content}
            </div>
    
            <div className='todo-icon-container'>
            <FaRegEdit className='todo-icon' />
            <IoIosRemoveCircleOutline className='todo-icon' />
            </div>
          
        </div>

  )
}

export default ToDo;