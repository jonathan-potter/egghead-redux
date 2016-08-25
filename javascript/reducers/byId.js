export default function byId(state = {}, action) {
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

export function getTodo(state, id) {
  return state[id]
}
