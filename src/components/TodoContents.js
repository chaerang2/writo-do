import React, {useState} from 'react';
import TodoList from './TodoList';
import enterImg from './css/imgs/subdirectory_arrow_left_black_24dp.svg'


const Contents = ({todos, todoCreate, doneToggle, todoDel}) => {
  const [text, setText] = useState('')
  const todoOnChange = e =>setText(e.target.value)
  
  const onSubmit = e =>{
    e.preventDefault();
    if(text.length > 30){
      alert('30자 이하로 작성해주세요')
    }else{
      todoCreate(text)
      setText('');
    }
  }
  return (
    <div className='contents_box'>
      <form onSubmit={onSubmit} className='input_form'>
        <input value={text} onChange={todoOnChange} className='input_box'></input>
        <button type="submit" className='input_btn'><img className='input_img' src={enterImg}></img></button>
      </form>
      {
        todos.length === 0 ? <div className='no_todo'>할 일이 없어요</div> : <TodoList todos={todos} doneToggle={doneToggle} todoDel={todoDel} />
      }
    </div>
  )
}

export default Contents
