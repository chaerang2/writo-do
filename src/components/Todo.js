import React from 'react'
import deleteImg from '../css/imgs/delete_black_24dp.svg'

const Todo = ({todo,doneToggle}) => {
  return (
    <li>
      <div className={todo.done ? 'doneTodo' : ''} onClick={()=>doneToggle(todo.id)}>동그라미</div>
      <span>{todo.text}</span>
      <img src={deleteImg}></img>
    </li>
  )
}

export default Todo
