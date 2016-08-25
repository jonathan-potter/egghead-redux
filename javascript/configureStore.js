import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from 'reducers'

export default function configureStore() {
  const middlewares = [promise]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )
}
