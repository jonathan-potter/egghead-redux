import { v4 } from 'node-uuid'

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
