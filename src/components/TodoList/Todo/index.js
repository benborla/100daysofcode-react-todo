import React from 'react'
import RemoveButton from './RemoveButton'

const Todo = ({ id, task, completed, handleTodoStatus}) => (
  <li
    onDoubleClick={handleTodoStatus}
    style={{
    textDecoration: completed ? 'line-through' : 'none',
    cursor: 'pointer'
    }}
  >
    { task }
    <RemoveButton todoId={id}/>
  </li>
)

export default Todo
