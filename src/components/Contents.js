import React, {useState} from 'react';
import TodoList from './TodoList';

const Contents = ({todos, todoCreate, doneToggle}) => {
  const [text, setText] = useState('')
  const todoOnChange = e =>setText(e.target.value)
  
  const onSubmit = e =>{
    e.preventDefault();
    todoCreate(text)
    setText('');
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={todoOnChange}></input>
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} doneToggle={doneToggle} />
    </div>
  )
}

export default Contents
