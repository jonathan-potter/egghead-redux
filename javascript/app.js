import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'

import store from 'javascript/store'

import TodoApp from 'components/TodoApp'

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
)
