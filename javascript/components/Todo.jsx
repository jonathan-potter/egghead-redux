import React, {PropTypes} from 'react'

export default function Todo({todo}, {store}) {
  return (
    <li
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

Todo.contextTypes = {
  store: PropTypes.object
}
