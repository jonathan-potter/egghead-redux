import { normalize } from 'normalizr'
import * as schema from 'actions/schema'
import { getIsFetching } from 'reducers'
import * as api from 'utility/api'

export const addTodo = text => dispatch => {
  api.addTodo(text).then(
    response => {
      dispatch({
        type: 'ADD_TODO_SUCCESS',
        response: normalize(response, schema.todo)
      })
    }
  )
}

export const toggleTodo = id => dispatch => {
  api.toggleTodo(id).then(
    response => {
      dispatch({
        type: 'TOGGLE_TODO_SUCCESS',
        response: normalize(response, schema.todo)
      })
    }
  )
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
        response: normalize(response, schema.arrayOfTodos),
        filter
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
