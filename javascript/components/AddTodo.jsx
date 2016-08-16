import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

let nextTodoId = 0;
export default connect()(function AddTodo({dispatch}){
  let input;

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        dispatch({
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
})
