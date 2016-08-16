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

function Todo({onClick, todo}) {
  return (
    <li
      onClick={onClick.bind(null, todo)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>
        {todo.text}
    </li>
  )
}

function TodoList({onClickTodo, todos}) {
  const listItems = todos.map(todo => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        onClick={onClickTodo} />
    )
  })

  return (
    <ul>
      { listItems }
    </ul>
  )
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

function FilterButtons() {
  return (
    <p>
      Show:
      <FilterButton
        filter="SHOW_ALL">
        All
      </FilterButton>
      <FilterButton
        filter="SHOW_ACTIVE">
        Active
      </FilterButton>
      <FilterButton
        filter="SHOW_COMPLETED">
        Completed
      </FilterButton>
    </p>
  )
}

class FilterButton extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      store.subscribe(() => {
        this.forceUpdate()
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const {children, filter} = this.props
    const state = store.getState();

    return (
      <button
        disabled={filter === state.visibilityFilter}
        onClick={() => {
          onClickFilter(filter)
        }}>
        {children}
      </button>
    )
  }
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

function onClickFilter(filter) {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
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
