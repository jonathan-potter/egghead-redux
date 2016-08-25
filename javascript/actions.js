import { v4 } from 'node-uuid'
import { getIsFetching } from 'reducers'
import * as api from 'utility/api'

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text: text
  }
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

  dispatch(requestTodos(filter))

  return api.fetchTodos(filter).then(response => {
    dispatch(receiveTodos(filter, response))
  })
}

function requestTodos(filter) {
  return {
    type: 'REQUEST_TODOS',
    filter
  }
}

function receiveTodos(filter, response) {
  return {
    type: 'RECEIVE_TODOS',
    filter,
    response
  }
}
