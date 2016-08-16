import React from 'react'

export default function AddTodo({onClickAddTodo}) {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        onClickAddTodo(input.value)

        input.value = ''
      }}>
        ADD TODO
      </button>
    </div>
  )
}
