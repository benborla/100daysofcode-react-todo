import React from 'react'
import { Filters } from '../../store/filters/action'
import Link from './Link'
import { connect } from 'react-redux'

const Filter = ({ total, totalActive, totalCompleted }) => {
  return <>
    <Link filter={Filters.SHOW_ALL} total={total}>All</Link>
    <Link filter={Filters.SHOW_ACTIVE} total={totalActive}>Active</Link>
    <Link filter={Filters.SHOW_COMPLETED} total={totalCompleted}>Completed</Link>
  </>
}

const mapStateToProps = (state) => ({
  total: state.todos.length,
  totalActive: state.todos.filter(todo => !todo.completed).length,
  totalCompleted: state.todos.filter(todo => todo.completed).length
})
export default connect(mapStateToProps)(Filter)
