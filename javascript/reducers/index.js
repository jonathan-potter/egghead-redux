import { combineReducers } from 'redux'

import todos, * as fromTodos from 'reducers/todos'

export default combineReducers({ todos: todos })

export function getVisibleTodos({state, filter}) {
  return fromTodos.getVisibleTodos({
    state: state.todos,
    filter: filter
  })
}

