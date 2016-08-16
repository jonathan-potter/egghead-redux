import React, {PropTypes} from 'react'

export default function Todo({onClick, todo}) {
  return (
    <li
      onClick={() => {onClick(todo.id)}}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>
        {todo.text}
    </li>
  )
}
