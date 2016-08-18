import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {addTodo} from 'javascript/actions'

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
