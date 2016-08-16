import React from 'react'

export default function Todo({onClick, todo}) {
  return (
    <li
      onClick={onClick.bind(null, todo)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>
        {todo.text}
    </li>
  )
}
