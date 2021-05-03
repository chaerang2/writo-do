import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,doneToggle}) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} doneToggle={doneToggle} />
      ))}
    </ul>
  )
}

export default TodoList
