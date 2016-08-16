import React from 'react'

import Todo from 'components/Todo'

export default function TodoList({onTodoClick, todos}) {
  const listItems = todos.map(todo => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        onClick={onTodoClick}/>
    )
  })

  return (
    <ul>
      { listItems }
    </ul>
  )
}
