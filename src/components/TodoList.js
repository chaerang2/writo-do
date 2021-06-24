import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,doneToggle,todoDel}) => {
  return (
    <ul className='todo_list'>
      {todos.reverse().map(todo => (
        <Todo key={todo.id} todo={todo} doneToggle={doneToggle} todoDel={todoDel} />
      ))}
    </ul>
  )
}

export default TodoList
