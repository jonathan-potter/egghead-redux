import React from 'react'

import store from 'javascript/store'

import AddTodo from 'components/AddTodo'
import VisibleTodoList from 'components/VisibleTodoList'
import FilterButtons from 'components/FilterButtons'

export default function TodoApp () {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <FilterButtons />
    </div>
  )
}
