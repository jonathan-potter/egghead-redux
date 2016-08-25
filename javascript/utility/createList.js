import { combineReducers } from 'redux'

export default function createList(filter) {
  return combineReducers({
    ids(state = [], action) {
      if (action.filter !== filter) { return state }

      switch(action.type) {
        case 'RECEIVE_TODOS':
          return action.response.map(todo => todo.id)
        default:
          return state
      }
    },

    isFetching(state = false, action) {
      if (action.filter !== filter) { return state }

      switch(action.type) {
        case 'REQUEST_TODOS':
          return true
        case 'RECEIVE_TODOS':
          return false
        default:
          return state
      }
    }
  })
}

export function getIds(state) {
  return state.ids
}

export function getIsFetching(state) {
  return state.isFetching
}
