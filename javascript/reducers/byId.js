export default function byId(state = {}, action) {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos
    }
  }

  return state
}

export function getTodo(state, id) {
  return state[id]
}
