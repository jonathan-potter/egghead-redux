import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import throttle from 'lodash/throttle'

import TodoApp from 'components/TodoApp'

import todos from 'reducers/todos'
import visibilityFilter from 'reducers/visibilityFilter'

import { loadState, saveState } from 'utility/localStorage'

const persistedState = loadState();

const store = createStore(combineReducers({
  todos,
  visibilityFilter
}), persistedState)

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  })
}, 1000))

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
