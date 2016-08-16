import { createStore, combineReducers } from 'redux'

import todos from 'reducers/todos'
import visibilityFilter from 'reducers/visibilityFilter'

export default createStore(combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
}))
