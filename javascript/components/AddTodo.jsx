import React, {PropTypes} from 'react'

let nextTodoId = 0;
export default function AddTodo(props, {store}){
  let input;

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: input.value,
          id: nextTodoId++
        })

        input.value = ''
      }}>
        ADD TODO
      </button>
    </div>
  )
}

AddTodo.contextTypes = {
  store: PropTypes.object
}
