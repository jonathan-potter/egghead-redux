import { combineReducers } from 'redux'

export default function createList(filter) {
  return combineReducers({
    ids(state = [], action) {
      if (action.filter !== filter) { return state }

      switch(action.type) {
        case 'FETCH_TODOS_SUCCESS':
          return action.response.map(todo => todo.id)
        default:
          return state
      }
    },

    isFetching(state = false, action) {
      if (action.filter !== filter) { return state }

      switch(action.type) {
        case 'FETCH_TODOS_REQUEST':
          return true
        case 'FETCH_TODOS_SUCCESS':
        case 'FETCH_TODOS_FAILURE':
          return false
        default:
          return state
      }
    },

    errorMessage(state = null, action) {
      if (action.filter !== filter) { return state }

      switch(action.type) {
        case 'FETCH_TODOS_FAILURE':
          return action.message
        case 'FETCH_TODOS_REQUEST':
        case 'FETCH_TODOS_SUCCESS':
          return null
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

export function getErrorMessage(state) {
  return state.errorMessage
}
