import { combineReducers } from 'redux'
import byId, * as fromById from 'reducers/byId'
import createList, * as fromList from 'utility/createList'

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
})

export default combineReducers({
  byId,
  listByFilter
})

export function getVisibleTodos({state, filter}) {
  const ids = fromList.getIds(state.listByFilter[filter])

  return ids.map(id => fromById.getTodo(state.byId, id))
}

export function getIsFetching({state, filter}) {
  return fromList.getIsFetching(state.listByFilter[filter])
}
