import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import TodoList from 'components/TodoList'
import * as actions from 'javascript/actions'
import { getVisibleTodos, getIsFetching } from 'reducers'

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
    const { toggleTodo, todos, isFetching } = this.props
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    return <TodoList todos={todos} onTodoClick={toggleTodo} />
  }
}

function mapStateToProps(state, { params }) {
  const filter = params.filter || 'all'

  return {
    todos: getVisibleTodos({state, filter}),
    isFetching: getIsFetching({state, filter}),
    filter
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))
