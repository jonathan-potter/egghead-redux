import React from 'react'

export default function AddTodo({store}) {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        onClickAddTodo(input.value, store)

        input.value = ''
      }}>
        ADD TODO
      </button>
    </div>
  )
}

let nextTodoId = 0;
function onClickAddTodo(todoName, store) {
  store.dispatch({
    type: 'ADD_TODO',
    text: todoName,
    id: nextTodoId++
  })
}
