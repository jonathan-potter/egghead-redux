import React from 'react'
import { Link } from 'react-router'

export default function FilterLink({ children, filter }) {
  return (
    <Link
      to={filter === 'all' ? '' : filter}
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}>
      {children}
    </Link>
  )
}


