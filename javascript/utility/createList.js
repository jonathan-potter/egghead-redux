import { combineReducers } from 'redux'

export default function createList(filter) {
  function handleToggle(state, action) {
    const { result: toggledId, entities } = action.response
    const { completed } = entities.todos[toggledId]
    const shouldRemove = (
      completed && filter === 'active' ||
      !completed && filter === 'completed'
    )

    if (shouldRemove) {
      return state.filter(id => id !== toggledId)
    } else {
      return state
    }
  }

  return combineReducers({
    ids(state = [], action) {
      switch(action.type) {
        case 'FETCH_TODOS_SUCCESS':
          return filter === action.filter ?
            action.response.result :
            state
        case 'ADD_TODO_SUCCESS':
          return filter !== 'completed' ?
            [...state, action.response.result] :
            state
        case 'TOGGLE_TODO_SUCCESS':
          return handleToggle(state, action)
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
