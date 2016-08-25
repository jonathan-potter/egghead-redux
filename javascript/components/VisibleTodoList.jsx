import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import TodoList from 'components/TodoList'
import FetchError from 'components/FetchError'
import * as actions from 'actions'
import { getErrorMessage, getVisibleTodos, getIsFetching } from 'reducers'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props

    fetchTodos(filter)
  }

  render() {
    const { errorMessage, isFetching, todos, toggleTodo } = this.props
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()} />
      )
    }

    return <TodoList todos={todos} onTodoClick={toggleTodo} />
  }
}

function mapStateToProps(state, { params }) {
  const filter = params.filter || 'all'

  return {
    todos: getVisibleTodos({state, filter}),
    errorMessage: getErrorMessage({state, filter}),
    isFetching: getIsFetching({state, filter}),
    filter
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))
