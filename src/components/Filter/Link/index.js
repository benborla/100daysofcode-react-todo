import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../../../store/filters/action'

const Link = ({ children, filter, total, onClick, current }) => 
  <button
    type='button'
    style={{ background: current ? 'red' : 'none'}}
    onClick={onClick}
    filter={filter}
  >
    {children} ({total})
  </button>  

const mapStateToProps = (state, props) => ({
  current: state.filter === props.filter
})
const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(setFilter(props.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
