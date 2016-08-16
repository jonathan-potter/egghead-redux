import React, {Component} from 'react'

export default class FilterButton extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const {children, filter, store} = this.props
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
