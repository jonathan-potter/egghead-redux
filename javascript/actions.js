import { v4 } from 'node-uuid'
import * as api from 'utility/api'

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text: text
  }
}

export function fetchTodos(filter) {
  return api.fetchTodos(filter).then(response => {
    return receiveTodos(filter, response)
  })
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export function requestTodos(filter) {
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
