import React, {Component, PropTypes} from 'react'

import {connect} from 'react-redux'

import TodoList from 'components/TodoList'

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos({
      todos: state.todos,
      filter: state.visibilityFilter
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

function getVisibleTodos({todos, filter}) {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}
