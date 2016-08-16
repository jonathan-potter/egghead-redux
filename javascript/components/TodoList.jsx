import React from 'react'

import Todo from 'components/Todo'

export default function TodoList({todos}) {
  const listItems = todos.map(todo => {
    return (
      <Todo
        key={todo.id}
        todo={todo}/>
    )
  })

  return (
    <ul>
      { listItems }
    </ul>
  )
}
