import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'

import store from 'javascript/store'

import TodoApp from 'components/TodoApp'

function render() {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
      visibilityFilter={store.getState().visibilityFilter} />,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
