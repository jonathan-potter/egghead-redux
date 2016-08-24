import todo from 'reducers/todo'

export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

export function getVisibleTodos({state, filter}) {
  switch(filter) {
    case 'all':
      return state
    case 'active':
      return state.filter(todo => !todo.completed)
    case 'completed':
      return state.filter(todo => todo.completed)
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}
