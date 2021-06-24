import React, {useState} from 'react'
import classNames from "classnames";
import deleteImg from './css/imgs/delete_black_24dp.svg'

const Todo = ({todo,doneToggle, todoDel}) => {
  const [trash, setTrash] = useState(false);

  const trashToggle = () =>{
    setTrash(!trash)
  };
  return (
    <li onMouseOver={trashToggle} onMouseOut={trashToggle} className='todo_entry'>
      <div className={classNames('todo_toggle',{doneTodo:todo.done})} onClick={()=>doneToggle(todo.id)}></div>
      <span className='todo_text'>{todo.text}</span>
      <img className={classNames('trash_img',{todo_delete:trash})} src={deleteImg} onClick={()=>todoDel(todo.id)}></img>
      {/* <div className={'todo_toggle'+(todo.done ? 'doneTodo' : '')} onClick={()=>doneToggle(todo.id)}></div> */}
    </li>
  )
}

export default Todo
