import React from 'react'

import store from 'javascript/store'

export default function AddTodo() {
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

let nextTodoId = 0;
function onClickAddTodo(todoName) {
  store.dispatch({
    type: 'ADD_TODO',
    text: todoName,
    id: nextTodoId++
  })
}
