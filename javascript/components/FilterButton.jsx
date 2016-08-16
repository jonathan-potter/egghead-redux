import React, {Component, PropTypes} from 'react'

export default class FilterButton extends Component {
  componentDidMount() {
    const {store} = this.context

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const {store} = this.context
    const {children, filter} = this.props
    const state = store.getState();

    return (
      <button
        disabled={filter === state.visibilityFilter}
        onClick={() => {
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: filter
          })
        }}>
        {children}
      </button>
    )
  }
}

FilterButton.contextTypes = {
  store: PropTypes.object
}
