import React from 'react'

import Todo from 'components/Todo'

export default function TodoList({onClickTodo, todos}) {
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
