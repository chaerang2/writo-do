import React, {useState} from 'react'
import classNames from "classnames";
import deleteImg from './css/imgs/delete_black_24dp.svg'

const Todo = ({todo,doneToggle, todoDel}) => {
  const [trash, setTrash] = useState(false);

  const trashToggle = () =>{
    setTrash(!trash)
  };
  return (
    <li onMouseOver={trashToggle} onMouseOut={trashToggle}>
      <div className={todo.done ? 'doneTodo' : ''} onClick={()=>doneToggle(todo.id)}>동그라미</div>
      <span>{todo.text}</span>
      <img className={classNames({todo_delete:trash})} src={deleteImg} onClick={()=>todoDel(todo.id)}></img>
    </li>
  )
}

export default Todo
