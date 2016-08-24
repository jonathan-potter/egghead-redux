import { createStore } from 'redux'
import rootReducer from 'reducers'

export default function configureStore() {
  const store = createStore(rootReducer)

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }

  store.dispatch = addPromiseSupport(store)

  return store
}

function addPromiseSupport(store) {
  const rawDispatch = store.dispatch

  return function(action) {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch)
    }

    return rawDispatch(action)
  }
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
