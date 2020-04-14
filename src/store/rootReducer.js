import { combineReducers } from 'redux'
import todosReducer from './todos/reducer'
import filterReducer from './filters/reducer'

export default combineReducers({
  todos: todosReducer,
  filter: filterReducer
})
