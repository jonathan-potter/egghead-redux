import { combineReducers } from 'redux'

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds
})

export default combineReducers({
  byId,
  idsByFilter
})

export function byId(state = {}, action) {
  switch(action.type) {
    case 'RECEIVE_TODOS':
      const nextState = { ...state }

      action.response.forEach(todo => {
        nextState[todo.id] = todo
      })

      return nextState
    default:
      return state
  }
}

export function allIds(state = [], action) {
  if (action.filter !== 'all') { return state }

  switch(action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map(todo => todo.id)
    default:
      return state
  }
}

export function activeIds(state = [], action) {
  if (action.filter !== 'active') { return state }

  switch(action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map(todo => todo.id)
    default:
      return state
  }
}

export function completedIds(state = [], action) {
  if (action.filter !== 'completed') { return state }

  switch(action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map(todo => todo.id)
    default:
      return state
  }
}

export function getVisibleTodos({state, filter}) {
  const ids = state.idsByFilter[filter]

  return ids.map(id => state.byId[id])
}
