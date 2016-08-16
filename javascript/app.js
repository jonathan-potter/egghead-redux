import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'

import expect from 'expect'
import deepFreeze from 'deep-freeze'

import store from 'javascript/store'

import Todo from 'components/Todo'
import TodoList from 'components/TodoList'
import FilterButtons from 'components/FilterButtons'



function getVisibleTodos({todos, filter}) {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
  }
}

function AddTodo({onClickAddTodo}) {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        onClickAddTodo(input.value)

        input.value = ''
      }}>
        ADD TODO
      </button>
    </div>
  )
}

function onClickTodo(todo) {
  return store.dispatch({
    type: 'TOGGLE_TODO',
    id: todo.id
  })
}

function onClickAddTodo(todoName) {
  store.dispatch({
    type: 'ADD_TODO',
    text: todoName,
    id: nextTodoId++
  })
}

let nextTodoId = 0;
function TodoApp ({todos, visibilityFilter}) {
  const visibleTodos = getVisibleTodos({todos: todos, filter: visibilityFilter})

  return (
    <div>
      <AddTodo onClickAddTodo={onClickAddTodo} />
      <TodoList todos={visibleTodos} onClickTodo={onClickTodo} visibilityFilter={visibilityFilter} />
      <FilterButtons />
    </div>
  )
}

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
