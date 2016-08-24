import { createStore } from 'redux'
import { loadState, saveState } from 'utility/localStorage'
import throttle from 'lodash/throttle'
import rootReducer from 'reducers'

export default function configureStore() {
  const initialState = loadState();
  const store = createStore(rootReducer, initialState)

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 1000))

  return store
}

function addLoggingToDispatch(store) {
  /* eslint-disable no-console */
  const rawDispatch = store.dispatch

  if (!console.group) {
    return rawDispatch
  }

  return function (action) {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)

    return returnValue
  }
  /* eslint-enable no-console */
}
