import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick() {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  function FilterButton ({active, children, onClick}) {
    return (
      <button
        disabled={active}
        onClick={onClick}>
        {children}
      </button>
    )
  }
)
