import React from 'react'

import store from 'javascript/store'

import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'
import FilterButtons from 'components/FilterButtons'

export default function TodoApp ({todos, visibilityFilter}) {
  const visibleTodos = getVisibleTodos({todos: todos, filter: visibilityFilter})

  return (
    <div>
      <AddTodo onClickAddTodo={onClickAddTodo} />
      <TodoList todos={visibleTodos} onClickTodo={onClickTodo} visibilityFilter={visibilityFilter} />
      <FilterButtons />
    </div>
  )
}

let nextTodoId = 0;
function onClickAddTodo(todoName) {
  store.dispatch({
    type: 'ADD_TODO',
    text: todoName,
    id: nextTodoId++
  })
}

function onClickTodo(todo) {
  return store.dispatch({
    type: 'TOGGLE_TODO',
    id: todo.id
  })
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
