import { getIsFetching } from 'reducers'
import * as api from 'utility/api'

export const addTodo = text => dispatch => {
  api.addTodo(text).then(
    response => {
      dispatch({
        type: 'ADD_TODO_SUCCESS',
        response
      })
    }
  )
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching({state: getState(), filter})) {
    return Promise.resolve()
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  })

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response
      })
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        message: error.message || 'Something went wrong.',
        filter
      })
    }
  )
}
