import {combineReducers} from 'redux';
import storages from './storages';
import todo from './todo';

const rootReducer = combineReducers({
  storages,
  todo
});

export default rootReducer;