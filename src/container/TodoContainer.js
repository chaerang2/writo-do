import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoContents from '../components/TodoContents';
import {todoAdd, todoToggle, todoDelete} from '../modules/todo';

const TodoContainer = () => {
  const stateValue = useSelector(state => state);
  const dispatch = useDispatch();

  const todoCreate = text => dispatch(todoAdd(text));
  const doneToggle = id => dispatch(todoToggle(id));
  const todoDel = id => dispatch(todoDelete(id));

  return <TodoContents todos={stateValue.todo} todoCreate={todoCreate} doneToggle={doneToggle} todoDel={todoDel} />
}

export default TodoContainer