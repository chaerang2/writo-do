const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';

let nextId = 1;
export const todoAdd = text =>({
  type:TODO_ADD,
  todo:{
    id:nextId++,
    text,
    done:false
  }
})

export const todoToggle = id =>({
  type:TODO_TOGGLE,
  id
}
)

const initialState = [];

export default function todos(state=initialState, action){
  switch(action.type){
    case TODO_ADD: 
      return state.concat(action.todo);
      case TODO_TOGGLE:
        return state.map(
          todo=>todo.id===action.id
          ?{...todo, done:!todo.done}
          :todo
        );
        default:
          return state;

  }
}