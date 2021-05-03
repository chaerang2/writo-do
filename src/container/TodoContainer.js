import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contents from '../components/Contents';
import {todoAdd, todoToggle} from '../modules/todo';

const TodoContainer = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  const todoCreate = text => dispatch(todoAdd(text));
  const doneToggle = id => dispatch(todoToggle(id));

  return <Contents todos={todos} todoCreate={todoCreate} doneToggle={doneToggle}/>
}

export default TodoContainer
