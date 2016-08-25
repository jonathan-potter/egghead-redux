import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from 'reducers'

const thunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch)
  } else {
    next(action)
  }
}

export default function configureStore() {
  const middlewares = [thunk]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )
}
