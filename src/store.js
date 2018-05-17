import { combineReducers, createStore } from "redux";
import todoListApp from './reducers/';

const reducers = conbineReducers({
  todoListApp;
});

export default createStore(reducers);