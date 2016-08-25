import React from 'react'

import AddTodo from 'components/AddTodo'
import VisibleTodoList from 'components/VisibleTodoList'
import FilterButtons from 'components/FilterButtons'

export default function TodoApp() {
  return (
    <div>
      <p>
        I didn't bother with Express so you need to be on the root path if you want to refresh
      </p>
      <AddTodo />
      <VisibleTodoList />
      <FilterButtons />
    </div>
  )
}
