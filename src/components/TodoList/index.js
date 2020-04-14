import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/todos/action'
import { Filters } from '../../store/filters/action'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
  {
    todos.map(todo => 
      <Todo
        key={todo.id}
        {...todo}
        handleTodoStatus={() => toggleTodo(todo.id)}
      />
    )
  }
  </ul>
)

const getTodoViaFilter = (todos, filter) => {
  switch (filter) {
    case Filters.SHOW_ALL:
      return todos
    case Filters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case Filters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      throw new Error(`Unknown Filter: ${filter}`)
  }
}

const mapStateToProps = ({ todos, filter }) => ({
  todos: getTodoViaFilter(todos, filter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
