import React, {Component, PropTypes} from 'react'
import { Provider } from 'react-redux'

import TodoApp from 'components/TodoApp'

export default function ({store}) {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}
