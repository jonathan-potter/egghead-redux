import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

export default connect()(function AddTodo({dispatch}){
  let input;

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value))

        input.value = ''
      }}>
        ADD TODO
      </button>
    </div>
  )
})

let nextTodoId = 0;
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  }
}
