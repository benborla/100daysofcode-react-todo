import React from 'react'
import { removeTodo } from '../../../../store/todos/action'
import { connect } from 'react-redux'

const RemoveButton = ({ todoId, removeTodo }) => (
  <button type="button" style={{ border: 'none', color: 'red'}} onClick={() => removeTodo(todoId)}>
    &times;
  </button>
)

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton)
