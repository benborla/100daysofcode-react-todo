import React from 'react'

const Todo = ({ task, completed, handleTodoStatus}) => (
  <li
    onDoubleClick={handleTodoStatus}
    style={{
    textDecoration: completed ? 'line-through' : 'none',
    cursor: 'pointer'
    }}
  >
    { task }
    <button type="button" style={{ border: 'none', color: 'red'}}>&times;</button>
  </li>
)

export default Todo
