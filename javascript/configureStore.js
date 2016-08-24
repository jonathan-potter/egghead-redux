import { createStore } from 'redux'
import { loadState, saveState } from 'utility/localStorage'
import throttle from 'lodash/throttle'
import rootReducer from 'reducers'

export default function configureStore() {
  const initialState = loadState();

  const store = createStore(rootReducer, initialState)

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 1000))

  return store
}
