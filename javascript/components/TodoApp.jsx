import React from 'react'

import AddTodo from 'components/AddTodo'
import VisibleTodoList from 'components/VisibleTodoList'
import FilterButtons from 'components/FilterButtons'

export default function TodoApp ({store}) {
  return (
    <div>
      <AddTodo store={store} />
      <VisibleTodoList store={store} />
      <FilterButtons store={store} />
    </div>
  )
}
