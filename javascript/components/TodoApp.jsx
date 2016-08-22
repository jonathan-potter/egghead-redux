import React from 'react'

import AddTodo from 'components/AddTodo'
import VisibleTodoList from 'components/VisibleTodoList'
import FilterButtons from 'components/FilterButtons'

export default function TodoApp ({ params }) {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList
        filter={params.filter || 'all'}/>
      <FilterButtons />
    </div>
  )
}
