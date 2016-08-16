import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'

import Provider from 'components/Provider'
import TodoApp from 'components/TodoApp'

import todos from 'reducers/todos'
import visibilityFilter from 'reducers/visibilityFilter'


const store = createStore(combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
}))

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
