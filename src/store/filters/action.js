export const SET_FILTER = 'SET_FILTER'
export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})
