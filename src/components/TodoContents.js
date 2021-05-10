import React, {useState} from 'react';
import TodoList from './TodoList';

const Contents = ({todos, todoCreate, doneToggle, todoDel}) => {
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
      {
        todos.length === 0 ? <div>할 일이 없어요</div> : <TodoList todos={todos} doneToggle={doneToggle} todoDel={todoDel} />
      }
    </div>
  )
}

export default Contents
