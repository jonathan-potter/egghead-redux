import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import TodoList from 'components/TodoList'
import * as actions from 'javascript/actions'
import { getVisibleTodos } from 'reducers'
import { fetchTodos } from 'utility/api'

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
    const { filter, receiveTodos } = this.props

    fetchTodos(this.props.filter).then(todos => {
      receiveTodos(filter, todos)
    })
  }

  render() {
    const { toggleTodo, ...rest } = this.props

    return <TodoList {...rest} onTodoClick={toggleTodo} />
  }
}

function mapStateToProps(state, { params }) {
  const filter = params.filter || 'all'

  return {
    todos: getVisibleTodos({state, filter}),
    filter
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))
