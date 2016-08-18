import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {setVisibilityFilter} from 'javascript/actions'

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick() {
      dispatch(setVisibilityFilter(props.filter))
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
