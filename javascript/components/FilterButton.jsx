import React, {Component} from 'react'

import store from 'javascript/store'

export default class FilterButton extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      store.subscribe(() => {
        this.forceUpdate()
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const {children, filter} = this.props
    const state = store.getState();

    return (
      <button
        disabled={filter === state.visibilityFilter}
        onClick={() => {
          onClickFilter(filter)
        }}>
        {children}
      </button>
    )
  }
}

function onClickFilter(filter) {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  })
}
