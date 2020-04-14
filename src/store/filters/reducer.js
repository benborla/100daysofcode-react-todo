import { SET_FILTER, Filters } from './action'

const filters = (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}

export default filters
