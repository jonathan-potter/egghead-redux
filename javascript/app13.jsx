import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import expect from 'expect'
import deepFreeze from 'deep-freeze'

import { createStore } from 'redux'

const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) { return state }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function combineReducers(reducers) {
  return function (state = {}, action) {
    return Object.keys(reducers).reduce((newState, reducerName) => {
      const reducer = reducers[reducerName]

      newState[reducerName] = reducer(state[reducerName], action)

      return newState
    }, {})
  }
}

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
})

const store = createStore(todoApp)

function FilterLink({filter, children}) {
  return (
    <button onClick={() =>{
      store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
      })
    }}>
      {children}
    </button>
  )
}

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

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    return (
      <div>
        <input ref='stuff' />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.refs.stuff.value,
            id: nextTodoId++
          })
          this.refs.stuff.value = ''
        }}>
          ADD TODO
        </button>
        <ul>
          {this.renderTodos()}
        </ul>
        <p>
          Show:
          <FilterLink
            filter="SHOW_ALL">
            All
          </FilterLink>
          <FilterLink
            filter="SHOW_ACTIVE">
            Active
          </FilterLink>
          <FilterLink
            filter="SHOW_COMPLETED">
            Completed
          </FilterLink>
        </p>
      </div>
    )
  }

  renderTodos() {
    const {todos, visibilityFilter} = this.props

    const visibleTodos = getVisibleTodos({todos: todos, filter: visibilityFilter})

    return (
      <ul>
        {visibleTodos.map(this.renderTodo.bind(this))}
      </ul>
    )
  }

  renderTodo(todo) {
    return (
      <li
        key={todo.id}
        onClick={() => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id: todo.id
          })
        }}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
        {todo.text}
      </li>
    )
  }
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
