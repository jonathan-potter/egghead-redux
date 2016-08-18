import { createStore, combineReducers } from 'redux'
import throttle from 'lodash/throttle'

import todos from 'reducers/todos'
import visibilityFilter from 'reducers/visibilityFilter'
import { loadState, saveState } from 'utility/localStorage'

export default function configureStore() {
  const initialState = loadState();

  const store = createStore(combineReducers({
    todos,
    visibilityFilter
  }), initialState)

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 1000))

  return store
}
