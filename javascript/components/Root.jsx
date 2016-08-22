import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import TodoApp from 'components/TodoApp'

export default function ({store}) {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/(:filter)' component={TodoApp} />
      </Router>
    </Provider>
  )
}
